#!/usr/bin/env python3
"""Bounded Tatoeba example harvest for vocab entries (sourced examples only).

Usage:
  python3 tools/harvest_tatoeba.py collect <id-prefix> <out.json>
      Query Tatoeba api_v0 for each entry whose id starts with <id-prefix>,
      apply exact-string + compound guards, write candidates for HUMAN review.
  python3 tools/harvest_tatoeba.py apply <reviewed.json>
      Apply reviewer-approved candidates (keep:true) to src/words.json.

Rules enforced (standing):
- Exact word-string match only; kanji-compound guard (CJK char adjacent to the
  match rejects); katakana-run guard (katakana adjacent to a katakana word's
  match rejects).
- Only direct cmn translations count as verified zh (translations[0] in
  api_v0); zh is OpenCC s2t converted and normalized to bank-majority forms.
- No direct cmn -> honest 待補 placeholder (zhPending:true). Never compose.
- Dedup on punctuation-normalized sentence text and tid.
- apply requires an explicit per-candidate keep:true from the reviewer; the
  reviewer owns contextual sense-fit against the entry's own gloss.
"""
import json, sys, os, re, time, unicodedata, urllib.parse, urllib.request

R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
UA = {'User-Agent': 'vocab-backfill/1.0 (sourced example review)'}
KANJI = re.compile(r'[㐀-䶿一-鿿]')
KATA = re.compile(r'[ァ-ヶー]')
NORM_MAP = {'爲': '為', '喫': '吃', '麪': '麵', '裏': '裡'}

def norm_zh(t):
    try:
        from opencc import OpenCC
        t = OpenCC('s2t').convert(t)
    except Exception:
        pass
    for a, b in NORM_MAP.items():
        t = t.replace(a, b)
    return t

def punct_norm(t):
    t = unicodedata.normalize('NFKC', t)
    return re.sub(r'[。．.、，,！!？?・\s]', '', t)

def guarded(text, word):
    out = []
    start = 0
    while True:
        i = text.find(word, start)
        if i == -1:
            return out
        j = i + len(word)
        before = text[i - 1] if i > 0 else ''
        after = text[j] if j < len(text) else ''
        if (before and KANJI.match(before)) or (after and KANJI.match(after)):
            start = i + 1
            continue
        if KATA.match(word[0]) and ((before and KATA.match(before)) or (after and KATA.match(after))):
            start = i + 1
            continue
        out.append(i)
        start = i + 1

def fetch(query):
    url = ('https://tatoeba.org/en/api_v0/search?from=jpn&to=cmn&query='
           + urllib.parse.quote(query))
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)

def collect(prefix, out_path):
    W = json.load(open(os.path.join(R, 'src', 'words.json')))
    targets = [w for w in W if w['id'].startswith(prefix)]
    assert targets, 'no targets'
    existing_texts = set()
    for w in W:
        for e in w['examples']:
            existing_texts.add(punct_norm(e['text']))
    review = []
    done = set()
    if os.path.exists(out_path):
        review = json.load(open(out_path))
        done = set(c['id'] for c in review)
        print('resuming:', len(done), 'words already collected', file=sys.stderr)
    for w in targets:
        if w['id'] in done:
            continue
        word = w['word']
        forms = [word]
        rd = w.get('reading')
        if rd and KATA.match(word[0]) is None and rd != word and not KANJI.search(word):
            forms.append(rd)
        cands = []
        seen = set()
        for form in forms:
            try:
                d = fetch(form)
            except Exception as ex:
                print('fetch error', w['id'], form, ex, file=sys.stderr)
                continue
            time.sleep(0.5)
            for r in d.get('results', []):
                text = r.get('text', '')
                if not guarded(text, form):
                    continue
                pn = punct_norm(text)
                if pn in existing_texts or pn in seen:
                    continue
                seen.add(pn)
                zh = None
                zhtid = None
                tr = r.get('translations') or []
                direct = tr[0] if len(tr) > 0 and isinstance(tr[0], list) else []
                for t in direct:
                    if t.get('lang') == 'cmn' and (t.get('correctness') or 0) >= 0:
                        zh = norm_zh(t['text'])
                        zhtid = str(t['id'])
                        break
                cands.append({'id': w['id'], 'word': word, 'gloss': w['zh'],
                              'text': text, 'tid': str(r['id']),
                              'zh': zh, 'zhtid_val': zhtid, 'keep': False,
                              'matched_form': form})
        review.extend(cands)
        json.dump(review, open(out_path, 'w'), ensure_ascii=False, indent=1)
        print(w['id'], word, '->', len(cands), 'candidates', file=sys.stderr)
    print('wrote', len(review), 'candidates to', out_path, file=sys.stderr)

def apply(review_path):
    rv = json.load(open(review_path))
    keep = [c for c in rv if c.get('keep')]
    assert keep, 'nothing approved'
    p = os.path.join(R, 'src', 'words.json')
    W = json.load(open(p))
    byid = {w['id']: w for w in W}
    GAP_RE = re.compile(r'例句待補：缺 [12] 句來源例句；不編造（列入每日檢查回補）')
    for c in keep:
        w = byid[c['id']]
        assert len(w['examples']) < 2, w['id'] + ' already full'
        e = {'text': c['text'], 'src': 'tatoeba', 'tid': c['tid']}
        if c.get('zh'):
            e['zh'] = c['zh']
            e['zhtid'] = c['zhtid_val']
        else:
            e['zh'] = '待補（來源無已核對直接中文譯文）'
            e['zhPending'] = True
        w['examples'].append(e)
        need = 2 - len(w['examples'])
        base = GAP_RE.sub('', w.get('note', '')).rstrip('；')
        if need:
            w['note'] = (base + '；' if base else '') + \
                '例句待補：缺 %d 句來源例句；不編造（列入每日檢查回補）' % need
        else:
            w['note'] = base
            if not w['note']:
                del w['note']
        print('applied', w['id'], w['word'], '->', len(w['examples']), 'examples', file=sys.stderr)
    json.dump(W, open(p, 'w'), ensure_ascii=False, indent=1)
    open(p, 'a').write('\n')

if __name__ == '__main__':
    cmd = sys.argv[1]
    if cmd == 'collect':
        collect(sys.argv[2], sys.argv[3])
    elif cmd == 'apply':
        apply(sys.argv[2])
    else:
        sys.exit('unknown command')

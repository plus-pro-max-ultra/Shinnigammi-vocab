#!/usr/bin/env python3
"""Build index.html from src/. Usage: python3 tools/build.py [version-string]
Replaces BUILD stamp in app.js, inlines words.json, CONTROL.md, css, and js into the template."""
import sys,os,re,json,datetime
R=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
rd=lambda p:open(os.path.join(R,'src',p),encoding='utf-8').read()

def md_to_html(md):
    """Minimal markdown -> HTML for CONTROL.md (headings, lists, bold, code, links, paragraphs)."""
    def inline(t):
        t=re.sub(r'&','&amp;',t); t=re.sub(r'<','&lt;',t); t=re.sub(r'>','&gt;',t)
        t=re.sub(r'\[([^\]]+)\]\((https?://[^)]+)\)',r'<a href="\2" target="_blank" rel="noreferrer">\1</a>',t)
        t=re.sub(r'\*\*([^*]+)\*\*',r'<strong>\1</strong>',t)
        t=re.sub(r'`([^`]+)`',r'<code>\1</code>',t)
        return t
    out=[]; ul=False
    def close_ul():
        nonlocal ul
        if ul: out.append('</ul>'); ul=False
    for line in md.splitlines():
        s=line.strip()
        if not s: close_ul(); continue
        m=re.match(r'^(#{1,4})\s+(.*)',s)
        if m:
            close_ul(); lv=len(m.group(1)); out.append('<h%d>%s</h%d>'%(lv,inline(m.group(2)),lv)); continue
        m=re.match(r'^[-*]\s+(.*)',s)
        if m:
            if not ul: out.append('<ul>'); ul=True
            out.append('<li>%s</li>'%inline(m.group(1))); continue
        m=re.match(r'^\d+[.、]\s*(.*)',s)
        if m:
            if not ul: out.append('<ul>'); ul=True
            out.append('<li>%s</li>'%inline(m.group(1))); continue
        if s in ('---','***'):
            close_ul(); out.append('<hr>'); continue
        close_ul(); out.append('<p>%s</p>'%inline(s))
    close_ul()
    return '\n'.join(out)

wj=rd('words.json').strip()
js=rd('app.js').replace('__WORDS__',wj)
import json as _json
_w=_json.loads(wj)
os.makedirs(os.path.join(R,'data'),exist_ok=True)
open(os.path.join(R,'data','german-pool.json'),'w',encoding='utf-8').write(_json.dumps([x for x in _w if x.get('lang')=='de'],ensure_ascii=False,indent=1))
ver=sys.argv[1] if len(sys.argv)>1 else 'dev'
stamp=ver+' '+datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=8))).strftime('%m%d-%H%M')
js=js.replace('__BUILD__',stamp)
out=rd('tpl_head.txt')+rd('style.css')+rd('tpl_mid.txt')+js.replace('</script','<\\/script')+rd('tpl_tail.txt')
open(os.path.join(R,'index.html'),'w',encoding='utf-8').write(out)
print('built',stamp,len(out))

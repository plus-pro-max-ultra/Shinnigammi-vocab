// node tools/noun-test.js <url>
const p=require('puppeteer-core');const fs=require('fs');const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const UM={a:'ä',o:'ö',u:'ü',A:'Ä',O:'Ö',U:'Ü'};
function uml(x){const m=x.search(/[aouAOU]/);return m<0?null:x.slice(0,m)+UM[x[m]]+x.slice(m+1)}
const SFX=[["nen",["n","e","n"]],["en",["e","n"]],["er",["e","r"]],["e",["e"]],["n",["n"]],["s",["s"]]];
function NQ(e){if(!e||e.lang!=='de'||typeof e.grammar!=='string')return null;
 const t=/^noun · (masculine|feminine|neuter)(?:\s*\([^)]*\))?; plural ([^;]+?)\s*(?:;.*)?$/.exec(e.grammar.trim());if(!t)return null;
 const g={masculine:'der',feminine:'die',neuter:'das'}[t[1]];const pl=t[2].trim();if(!pl||/[/(,]/.test(pl))return null;
 const stem=e.word.replace(/^(der|die|das)\s+/,'');if(!stem)return null;const ust=uml(stem);
 if(pl===stem)return{stem,gender:g,plural:pl,seq:['-']};if(ust&&pl===ust)return{stem,gender:g,plural:pl,seq:['¨']};
 for(const[f,b]of SFX){if(pl.length>f.length&&pl.endsWith(f)){const base=pl.slice(0,-f.length);
  if(base===stem)return{stem,gender:g,plural:pl,seq:b};if(ust&&base===ust)return{stem,gender:g,plural:pl,seq:['¨',...b]}}}return null}
(async()=>{const u=process.argv[2];const words=JSON.parse(fs.readFileSync('src/words.json','utf8'));
const elig=words.filter(x=>NQ(x));console.log('eligible pool:',elig.length);
const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});
const pg=await b.newPage();await pg.setViewport({width:390,height:844,isMobile:true,hasTouch:true});
let errs=0;pg.on('pageerror',x=>{errs++;console.log('ERR',x.message)});
const ok=(n,c)=>console.log(c?'PASS':'FAIL',n);
const shot=n=>pg.screenshot({path:'/tmp/w/v2/tools/'+n+'.png'});
await pg.goto(u+'#/');await pg.evaluate(()=>localStorage.clear());await pg.reload();await sleep(900);
await pg.evaluate(()=>{const x=[...document.querySelectorAll('.lang-switch')];x.length&&x[0].click()});await sleep(500);
await pg.goto(u+'#/quiz');await pg.reload();await sleep(900);
// noun tile visible only for de
ok('noun tile present (de)',await pg.evaluate(()=>[...document.querySelectorAll('.mode-tiles button')].some(x=>x.innerText.includes('名詞測驗'))));
await pg.evaluate(()=>{const x=[...document.querySelectorAll('.mode-tiles button')].find(x=>x.innerText.includes('名詞測驗'));x.click()});await sleep(300);
const cnt=await pg.evaluate(()=>{const m=document.body.innerText.match(/範圍內的單字：\s*(\d+)/);return m?Number(m[1]):-1});
const exp=elig.filter(x=>!x.foundations).length;console.log('expected pool (no foundations):',exp,'got:',cnt);ok('pool count == '+exp,cnt===exp);
await pg.evaluate(()=>{const x=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='開始');x.click()});await sleep(600);
async function answer(correct){
 const stem=await pg.evaluate(()=>document.querySelector('.quiz-prompt h1').innerText.trim());
 const q=elig.map(x=>NQ(x)).find(q=>q&&q.stem===stem);
 if(!q){console.log('FAIL stem lookup',stem);return null}
 const gender=correct===false?(q.gender==='der'?'das':'der'):q.gender;
 const seq=correct==='partial'?q.seq.slice(0,1):(correct===false?['s']:(Array.isArray(correct)?correct:q.seq));
 await pg.evaluate(g=>{[...document.querySelectorAll('.gender-row button')].find(x=>x.innerText.trim()===g).click()},gender);await sleep(120);
 for(const b of seq){await pg.evaluate(b=>{[...document.querySelectorAll('.pl-block')].find(x=>x.innerText.trim()===b).click()},b);await sleep(80)}
 return q}
// Q1: partial assembly must NOT auto-check
let q1=await answer('partial');await sleep(300);
ok('partial no premature check',await pg.evaluate(()=>!document.querySelector('.pl-answer.sp-ok,.pl-answer.sp-bad')));
// complete Q1 correctly: re-read stem (same question), tap remaining blocks
const rest=q1.seq.slice(1);
for(const b of rest){await pg.evaluate(b=>{[...document.querySelectorAll('.pl-block')].find(x=>x.innerText.trim()===b).click()},b);await sleep(80)}
await pg.evaluate(()=>{const x=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='送出');x.click()});await sleep(300);
ok('correct answer ok state',await pg.evaluate(()=>!!document.querySelector('.pl-answer.sp-ok')));
ok('feedback shows full form',await pg.evaluate((full)=>document.body.innerText.includes(full),'die '+q1.plural));
ok('no auto-advance (mastery off)',await pg.evaluate(s=>document.querySelector('.quiz-prompt h1').innerText.trim()===s,q1.stem));
await shot('noun-correct');
await pg.evaluate(()=>{const x=[...document.querySelectorAll('button.next-btn')];x.length&&x[0].click()});await sleep(400);
// Q2: wrong answer
ok('ⓘ available before answer',await pg.evaluate(()=>!!document.querySelector('.exp-open')));
ok('idk styled+placed beside submit',await pg.evaluate(()=>{const x=document.querySelector('.nq-actions .nq-idk');if(!x)return false;const cs=getComputedStyle(x);return cs.backgroundColor!=='rgba(0, 0, 0, 0)'&&cs.borderRadius!=='0px'}));
let q2=await answer(false);
await pg.evaluate(()=>{const x=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='送出');x.click()});await sleep(300);
ok('wrong answer bad state',await pg.evaluate(()=>!!document.querySelector('.pl-answer.sp-bad')));
ok('wrong card is popup (exp-sheet fixed)',await pg.evaluate(()=>{const f=document.querySelector('.quiz-feedback.exp-sheet');return !!f&&getComputedStyle(f).position==='fixed'}));
ok('popup backdrop present',await pg.evaluate(()=>!!document.querySelector('.exp-backdrop')));
ok('no inline feedback card for noun',await pg.evaluate(()=>[...document.querySelectorAll('.quiz-feedback')].every(x=>x.className.includes('exp-sheet'))));
ok('ⓘ available after answer',await pg.evaluate(()=>!!document.querySelector('.exp-open')));
await shot('noun-wrong-popup');
await pg.evaluate(()=>document.querySelector('.exp-close').click());await sleep(250);
ok('popup closes via ✕ 返回',await pg.evaluate(()=>!document.querySelector('.quiz-feedback')));
ok('wrong shows correction',await pg.evaluate((full)=>document.body.innerText.includes(full),'die '+q2.plural));
ok('wrong gender marked',await pg.evaluate(()=>!!document.querySelector('.gender-row button.correct-option')&&!!document.querySelector('.gender-row button.wrong-option')));
await shot('noun-wrong');
await pg.evaluate(()=>{const x=[...document.querySelectorAll('button.next-btn')];x.length&&x[0].click()});await sleep(400);
// Q3: 不會
ok('idk marks wrong',await pg.evaluate(()=>{const x=[...document.querySelectorAll('.nq-idk')];if(!x.length)return false;x[0].click();return true}));
await sleep(300);
ok('idk opens popup too',await pg.evaluate(()=>!!document.querySelector('.quiz-feedback.exp-sheet')));
await pg.evaluate(()=>document.querySelector('.exp-close').click());await sleep(250);await pg.evaluate(()=>{const x=[...document.querySelectorAll('button.next-btn')];x.length&&x[0].click()});await sleep(300);
// mastery ON: auto-advance after correct
await pg.evaluate(()=>localStorage.setItem('mmv:vocabulary.ui.v1',JSON.stringify({mastery:true})));
await pg.goto(u+'#/quiz');await pg.reload();await sleep(900);
await pg.evaluate(()=>{const x=[...document.querySelectorAll('.mode-tiles button')].find(x=>x.innerText.includes('名詞測驗'));x.click()});await sleep(200);
await pg.evaluate(()=>{const x=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='開始');x.click()});await sleep(600);
const s1=await pg.evaluate(()=>document.querySelector('.quiz-prompt h1').innerText.trim());
await answer(true);
await pg.evaluate(()=>{const x=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='送出');x.click()});
await sleep(300);ok('mastery: still on same q at +300ms',await pg.evaluate(s=>document.querySelector('.quiz-prompt h1').innerText.trim()===s,s1));
await sleep(800);ok('mastery: auto-advanced (0.7s timer)',await pg.evaluate(s=>document.querySelector('.quiz-prompt h1').innerText.trim()!==s,s1));
// tiles answer states + spell mark position
await pg.goto(u+'#/quiz');await pg.reload();await sleep(900);
await pg.evaluate(()=>{const x=[...document.querySelectorAll('.mode-tiles button')].find(x=>x.innerText.includes('字塊拼字'));x.click()});await sleep(200);
await pg.evaluate(()=>{const x=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='開始');x.click()});await sleep(600);
await pg.evaluate(()=>{document.querySelector('.tile-grid button').click()});await sleep(150);
await shot('tiles-unanswered');
await pg.evaluate(()=>{const x=[...document.querySelectorAll('.tile-idk')];x.length&&x[0].click()});await sleep(300);
ok('tiles wrong border',await pg.evaluate(()=>{const x=document.querySelector('.tile-answer');return x&&getComputedStyle(x).borderColor==='rgb(229, 115, 115)'}));
await shot('tiles-wrong');
await pg.goto(u+'#/quiz');await pg.reload();await sleep(900);
await pg.evaluate(()=>{const x=[...document.querySelectorAll('.mode-tiles button')].find(x=>x.innerText.includes('打字拼字'));x.click()});await sleep(200);
await pg.evaluate(()=>{const x=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='開始');x.click()});await sleep(600);
await pg.type('.spell-input','xxx');await pg.keyboard.press('Enter');await sleep(300);
const mark=await pg.evaluate(()=>{const b=document.querySelector('.spell-row b');if(!b)return null;const r=b.getBoundingClientRect(),i=document.querySelector('.spell-input').getBoundingClientRect();const cs=getComputedStyle(b);return{pos:cs.position,insideX:r.left>=i.left&&r.right<=i.right,right:cs.right}});
ok('spell mark inside input right',mark&&mark.pos==='absolute'&&mark.insideX&&mark.right==='12px');
await shot('spell-mark');
console.log('pageerrors',errs);await b.close()})();

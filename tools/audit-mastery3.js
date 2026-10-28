const puppeteer=require('puppeteer-core');
const fs=require('fs');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
// parse words map from built index.html (var fm = [...])
const raw=fs.readFileSync('index.html','utf8');
const start=raw.indexOf('var fm = ')+9;
let depth=0,end=start;
for(let i=start;i<raw.length;i++){const c=raw[i];if(c==='[')depth++;else if(c===']'){depth--;if(depth===0){end=i+1;break}}}
const W=JSON.parse(raw.slice(start,end));
const byWord={};W.forEach(w=>byWord[w.word]=w);
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();await p.setViewport({width:390,height:844});
const errs=[];p.on('pageerror',e=>errs.push(String(e).slice(0,150)));
const base=process.argv[2];
await p.goto(base+'#/more');await p.reload();await sleep(1300);
const click=async t=>{const r=await p.evaluate(t=>{const x=[...document.querySelectorAll('button,label,a,summary')].find(x=>x.innerText.trim().includes(t)&&!x.disabled);if(x){x.click();return 1}return 0},t);await sleep(500);return r};
await click('設定');
// enable mastery via its checkbox
const tog=await p.evaluate(()=>{
  const cb=[...document.querySelectorAll('input[type=checkbox]')].find(c=>c.closest('label')?.innerText?.includes('精熟複習'));
  if(!cb)return 'no-cb';if(!cb.checked)cb.click();return 'checked='+cb.checked});
await sleep(400);
console.log('mastery toggle:',tog);
// start quiz
await p.goto(base+'#/quiz');await p.reload();await sleep(1200);
await click('日 → 中');await click('開始');
// answer correctly using words map
const res=await p.evaluate(async()=>{return document.querySelector('.quiz-stem,.stem,.quiz-word')?.innerText||document.querySelector('section')?.innerText?.slice(0,80)});
const stemInfo=await p.evaluate(()=>{
  // find the big question word: largest font text node in quiz area
  const els=[...document.querySelectorAll('.quiz-options')][0]?.parentElement?.querySelectorAll('*')||[];
  let best='',bs=0;
  els.forEach(e=>{if(e.children.length===0){const s=parseFloat(getComputedStyle(e).fontSize);if(s>bs&&e.textContent.trim()){bs=s;best=e.textContent.trim()}}});
  return {word:best,size:bs};
});
console.log('stem word:',JSON.stringify(stemInfo));
const w=byWord[stemInfo.word];
if(!w){console.log('word not in map - trying innerText match');}
const zh=w?(w.zh||'').split('／')[0].split('；')[0].split('/')[0].trim():'';
const answered=await p.evaluate(zh=>{
  const opts=[...document.querySelectorAll('.quiz-options button')];
  const o=opts.find(o=>o.innerText.trim()===zh)||opts.find(o=>zh&&o.innerText.includes(zh))||opts[0];
  o.click();return o.innerText.trim().slice(0,20);
},zh);
await sleep(300);
const correct=await p.evaluate(()=>!!document.querySelector('.correct-option'));
// wait for mastery auto-advance (~0.7s)
const before=await p.evaluate(()=>document.querySelector('.quiz-options')?.parentElement?.innerText?.length);
await sleep(1500);
const afterState=await p.evaluate(()=>({hasNext:!![...document.querySelectorAll('button')].find(b=>/下一題/.test(b.innerText)),hasCorrect:!!document.querySelector('.correct-option'),txt:document.querySelector('.quiz-options')?.parentElement?.innerText?.length}));
console.log('answered:',answered,'correct:',correct);
console.log('after 1.5s: nextBtn(after-advance should be new question):',JSON.stringify(afterState),'contentChanged:',before!==afterState.txt);
console.log('pageerrors',errs.length,errs);
await p.screenshot({path:'tools/audit-mastery-after.png'});
await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

const puppeteer=require('puppeteer-core');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();await p.setViewport({width:390,height:844});
const errs=[];p.on('pageerror',e=>errs.push(String(e).slice(0,150)));
const base=process.argv[2];
await p.goto(base+'#/more');await p.reload();await sleep(1300);
const click=async t=>{const r=await p.evaluate(t=>{const x=[...document.querySelectorAll('button,label,a,summary')].find(x=>x.innerText.trim().includes(t)&&!x.disabled);if(x){x.click();return 1}return 0},t);await sleep(500);return r};
console.log('設定:',await click('設定'));
const has=await p.evaluate(()=>document.body.innerText.includes('精熟複習'));
console.log('mastery toggle present:',has);
// enable it
const toggled=await p.evaluate(()=>{
  const els=[...document.querySelectorAll('*')].filter(e=>e.children.length===0&&e.textContent.includes('精熟複習'));
  if(!els.length)return 'no-el';
  let n=els[0];
  for(let i=0;i<6&&n;i++){const inp=n.querySelector&&n.querySelector('input[type=checkbox],button[role=switch]');if(inp){inp.click();return 'clicked-input'}
    if(n.tagName==='BUTTON'||n.getAttribute&&n.getAttribute('role')==='switch'){n.click();return 'clicked-btn'}
    n=n.parentElement}
  return 'no-control'});
await sleep(400);
console.log('toggle action:',toggled);
await p.screenshot({path:'tools/audit-mastery-setting.png'});
// quiz: answer correctly, check auto-advance without info card
await p.goto(base+'#/quiz');await p.reload();await sleep(1200);
await click('日 → 中');await click('開始');
const q1=await p.evaluate(()=>document.querySelector('.quiz-stem,.quiz-question')?.innerText||document.body.innerText.slice(0,60));
// click the CORRECT option: find which is correct by trying and reading .correct-option marker
await p.evaluate(()=>{const opts=[...document.querySelectorAll('.quiz-options button')];opts[0].click()});
await sleep(300);
const wasCorrect=await p.evaluate(()=>!!document.querySelector('.correct-option'));
if(!wasCorrect){// clicked wrong; note and try next option on next question
  console.log('first click was wrong option; mastery only auto-advances on correct - retry next question');
  await p.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(b=>/下一題/.test(b.innerText));if(b)b.click()});await sleep(500);
}
// now answer correctly by clicking options until one is marked correct
const adv=await p.evaluate(async()=>{
  const sleep=ms=>new Promise(r=>setTimeout(r,ms));
  const stem=()=>document.querySelector('.quiz-options')?.parentElement?.innerText?.slice(0,50)||'';
  const s0=stem();
  const opts=[...document.querySelectorAll('.quiz-options button')];
  for(const o of opts){o.click();await sleep(150);if(document.querySelector('.correct-option'))break;}
  if(!document.querySelector('.correct-option'))return 'could-not-answer-correctly';
  const infoCard=!document.querySelector('.info-card,.word-info');
  await sleep(1200); // mastery auto-advance ~0.7s
  const s1=stem();
  return JSON.stringify({advanced:s0!==s1, noInfoCard:infoCard});
});
console.log('mastery behavior:',adv);
console.log('pageerrors',errs.length,errs);
await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

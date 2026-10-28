const p=require('puppeteer-core');const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});
const pg=await b.newPage();await pg.setViewport({width:390,height:844,isMobile:true,hasTouch:true});
let errs=0;pg.on('pageerror',x=>{errs++;console.log('ERR',x.message)});
await pg.goto('http://localhost:8571/#/more');await pg.evaluate(()=>localStorage.clear());
await pg.goto('http://localhost:8571/#/more');await sleep(800);
await pg.evaluate(()=>{const b=[...document.querySelectorAll('button,a')].find(x=>x.innerText.includes('設定'));b&&b.click();});await sleep(700);
const tog=await pg.evaluate(()=>{const l=[...document.querySelectorAll('label.check-row')].find(x=>x.textContent.includes('精熟複習模式'));if(!l)return false;l.querySelector('input').click();return true});
console.log('toggle found+clicked:',tog);
console.log('stored mastery:',await pg.evaluate(()=>JSON.parse(localStorage['mmv:vocabulary.ui.v1']||'{}').mastery));
// start MC quiz (日 → 中)
await pg.goto('http://localhost:8571/#/quiz');await sleep(700);
await pg.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.includes('日 → 中'));b&&b.click();});await sleep(400);
await pg.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='開始');b&&b.click();});await sleep(800);
// find the CORRECT option: expose quiz state via DOM is hard; instead use the answer reveal: click 不會 would mark wrong. We need a correct click. Trick: read current word from prompt, fetch words.json embedded: use window? The bank is inline in the page JS (not window-exposed). Alternative: brute force across fresh runs is wasteful; instead read the correct answer from the built index.html bank served at /words-embedded? Not available.
// Simplest robust: the MC options are 4 buttons; after answering, correct option gets .correct-option. We can click the FIRST option, check result; if wrong, that still validates wrong-stays-manual. To guarantee a correct case, restart quiz repeatedly until option-1 is correct (25% each).
async function attemptCorrect(){
  await pg.goto('http://localhost:8571/#/quiz');await sleep(600);
  await pg.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.includes('日 → 中'));b&&b.click();});await sleep(300);
  await pg.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='開始');b&&b.click();});await sleep(700);
  const qn=await pg.evaluate(()=>document.querySelector('.hdr-title strong')?.innerText||'');
  // click first option
  await pg.evaluate(()=>{document.querySelector('.quiz-options button').click();});
  await sleep(250);
  const correct=await pg.evaluate(()=>{const t=document.querySelector('.quiz-options button');return t&&t.classList.contains('correct-option');});
  return {qn,correct};
}
let res=await attemptCorrect();let tries=1;
while(!res.correct&&tries<6){res=await attemptCorrect();tries++;}
console.log('correct-answer setup after tries:',tries,'correct:',res.correct);
if(res.correct){
  await sleep(400);console.log('still on answered state at +400ms:',await pg.evaluate(()=>!!document.querySelector('.correct-option')));
  await sleep(600);
  const gone=await pg.evaluate(()=>!document.querySelector('.correct-option'));
  console.log('auto-advanced by ~1.0s:',gone);
}
// wrong answer case: start fresh quiz, click 不會
await pg.goto('http://localhost:8571/#/quiz');await sleep(600);
await pg.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.includes('日 → 中'));b&&b.click();});await sleep(300);
await pg.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='開始');b&&b.click();});await sleep(700);
await pg.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='不會');b&&b.click();});await sleep(300);
await sleep(1100);
const stayed=await pg.evaluate(()=>!!document.querySelector('.next-btn')||!!document.querySelector('.correct-option'));
console.log('wrong answer stays manual:',stayed);
console.log('pageerrors',errs);await b.close();})().catch(e=>{console.error(e);process.exit(1)});

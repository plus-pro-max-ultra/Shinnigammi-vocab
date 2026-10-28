const puppeteer=require('puppeteer-core');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();await p.setViewport({width:390,height:844});
const errs=[];p.on('pageerror',e=>errs.push(String(e).slice(0,150)));
const client=await p.createCDPSession();
await client.send('Page.setDownloadBehavior',{behavior:'allow',downloadPath:'/tmp/w/v2/tools/dl'});
const base=process.argv[2];
await p.goto(base+'?nc='+Date.now());await sleep(1500);
// generate real state: answer one choice-quiz question correctly (smoke.js pattern)
await p.goto(base+'#/quiz');await p.reload();await sleep(1200);
const click=async t=>{const r=await p.evaluate(t=>{const x=[...document.querySelectorAll('button,label,a,summary')].find(x=>x.innerText.trim().includes(t)&&!x.disabled);if(x){x.click();return 1}return 0},t);await sleep(400);return r};
console.log('quiz menu 日 → 中:',await click('日 → 中'),'開始:',await click('開始'));
// answer correctly: read the correct option? simplest: click options until .correct-option appears
for(let q=0;q<3;q++){
  const done=await p.evaluate(()=>{
    if(document.querySelector('.correct-option'))return 'already';
    const opts=[...document.querySelectorAll('.quiz-options button')];
    for(const o of opts){o.click();}
    return document.querySelector('.correct-option')?'hit':'miss';
  });
  await sleep(400);
  const nxt=await p.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(b=>/下一題/.test(b.innerText));if(b){b.click();return 1}return 0});
  await sleep(400);
  if(done==='hit'||done==='already')break;
}
const state=await p.evaluate(()=>{const c=JSON.parse(localStorage['mmv:vocabulary.catalog.v1']||'{}');const ent=Object.entries(c.entries||{});return {n:ent.length, sample:ent.slice(0,2)}});
console.log('state entries:',JSON.stringify(state));
// backup page
await p.goto(base+'#/more');await p.reload();await sleep(1200);
const r=await p.evaluate(()=>{const x=[...document.querySelectorAll('button,label,a,summary,div,span')].find(e=>e.innerText&&e.innerText.trim()==='備份資料');if(x){x.click();return 'ok'}return 'no'});
await sleep(900);
console.log('nav backup:',r);
const txt=await p.evaluate(()=>document.body.innerText.split('\n').filter(x=>x.trim()).slice(0,20));
console.log('backup page:',JSON.stringify(txt));
await p.screenshot({path:'tools/audit-backup-page.png'});
console.log('pageerrors',errs.length,errs);
await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

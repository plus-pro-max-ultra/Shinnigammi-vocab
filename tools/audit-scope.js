const puppeteer=require('puppeteer-core');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();await p.setViewport({width:390,height:844});
const errs=[];p.on('pageerror',e=>errs.push(String(e).slice(0,150)));
const base=process.argv[2];
await p.goto(base+'#/quiz');await p.reload();await sleep(1300);
// switch to German
const langSw=await p.evaluate(()=>{
  const x=[...document.querySelectorAll('button,label,a,summary,div,span')].find(e=>e.offsetParent&&/^(德文|德語|Deutsch|DE)$/.test(e.innerText.trim()));
  if(x){x.click();return x.innerText.trim()}return null});
await sleep(900);
console.log('lang switch:',langSw);
const click=async t=>{const r=await p.evaluate(t=>{const x=[...document.querySelectorAll('button,label,a,summary')].find(x=>x.innerText.trim().includes(t)&&!x.disabled);if(x){x.click();return 1}return 0},t);await sleep(500);return r};
// open scope selector (範圍)
const sc=await click('範圍');
await sleep(600);
const scopeTxt=await p.evaluate(()=>document.body.innerText.split('\n').filter(x=>x.trim()).slice(0,40));
console.log('scope sheet:',JSON.stringify(scopeTxt));
await p.screenshot({path:'tools/audit-de-scope.png'});
console.log('pageerrors',errs.length,errs);
await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

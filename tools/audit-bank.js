const puppeteer=require('puppeteer-core');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
const base=process.argv[2];
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();await p.setViewport({width:390,height:844});
const errs=[];p.on('pageerror',e=>errs.push(String(e)));
const nav=async t=>{const r=await p.evaluate(t=>{const x=[...document.querySelectorAll('button,label,a,summary,div,span')].find(e=>e.innerText&&e.innerText.trim()===t);if(x){x.click();return 1}return 0},t);await sleep(700);return r};
await p.goto(base+'?nc='+Date.now(),{waitUntil:'networkidle0'});
console.log('nav 單字庫:',await nav('單字庫'));
await p.screenshot({path:'tools/audit-bank-list.png'});
const listInfo=await p.evaluate(()=>({txt:document.body.innerText.split('\n').slice(0,12)}));
console.log('bank list head:',JSON.stringify(listInfo.txt));
// click first word entry (a row containing ·)
const clicked=await p.evaluate(()=>{
  const rows=[...document.querySelectorAll('div,li,a')].filter(e=>e.innerText&&/·/.test(e.innerText)&&e.innerText.length<80&&e.children.length<6);
  // pick deepest/first plausible row
  const r=rows.find(e=>/食べる|水|学校|私/.test(e.innerText))||rows[0];
  if(r){r.click();return r.innerText.split('\n')[0]}return null});
await sleep(900);
console.log('clicked word:',clicked);
await p.screenshot({path:'tools/audit-word-detail.png'});
const det=await p.evaluate(()=>{
  const t=document.body.innerText;
  return {hasExample:/例句|例文/.test(t), sections:t.split('\n').slice(0,25)};
});
console.log('detail head:',JSON.stringify(det.sections));
// tap reveal translation
const rev=await p.evaluate(()=>{
  const before=document.body.innerText;
  const ex=[...document.querySelectorAll('*')].filter(e=>e.children.length===0&&/點例句|空白處|翻譯/.test(e.textContent))[0];
  if(ex){ex.click();return 'clicked-reveal-hint'}
  const sent=[...document.querySelectorAll('*')].filter(e=>e.children.length===0&&/[぀-ヿ一-鿿]/.test(e.textContent)&&e.textContent.length>6&&e.textContent.length<60)[0];
  if(sent){sent.click();return 'clicked-sentence'}
  return 'no-target'});
await sleep(600);
await p.screenshot({path:'tools/audit-word-detail-reveal.png'});
console.log('reveal:',rev);
console.log('pageerrors',errs.length, errs.slice(0,2));
await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

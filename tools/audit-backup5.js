const puppeteer=require('puppeteer-core');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();await p.setViewport({width:390,height:844});
const errs=[];p.on('pageerror',e=>errs.push(String(e).slice(0,150)));
await p.evaluateOnNewDocument(()=>{
  const orig=URL.createObjectURL;
  window.__caps=[];
  URL.createObjectURL=function(blob){window.__caps.push(blob);return orig.call(URL,blob)};
});
const base=process.argv[2];
await p.goto(base+'?nc='+Date.now());await sleep(1500);
// state via one real quiz answer
await p.goto(base+'#/quiz');await p.reload();await sleep(1200);
const click=async t=>{const r=await p.evaluate(t=>{const x=[...document.querySelectorAll('button,label,a,summary')].find(x=>x.innerText.trim().includes(t)&&!x.disabled);if(x){x.click();return 1}return 0},t);await sleep(400);return r};
await click('日 → 中');await click('開始');
await p.evaluate(()=>{document.querySelector('.quiz-options button').click()});await sleep(500);
const before=await p.evaluate(()=>({cat:localStorage['mmv:vocabulary.catalog.v1']||'',lv:localStorage['mmv:vocabulary.language.v1']||''}));
// export
await p.goto(base+'#/more');await p.reload();await sleep(1100);
await click('備份資料');await click('產生備份');await sleep(1500);
const cap=await p.evaluate(async()=>{
  if(!window.__caps.length)return null;
  const t=await window.__caps[window.__caps.length-1].text();
  return t;
});
if(!cap){console.log('FAIL no blob captured');process.exit(1)}
let j;try{j=JSON.parse(cap)}catch(e){console.log('FAIL backup not JSON');process.exit(1)}
console.log('backup keys:',Object.keys(j).join(',').slice(0,200));
console.log('format field:',j.format||j.v||j.version||'(none top-level)');
const hasCatalog=cap.includes('vocabulary.catalog.v1')||cap.includes('jp-001');
console.log('backup contains catalog data:',hasCatalog);
// wipe, restore via file input
await p.evaluate(()=>localStorage.clear());
await p.goto(base+'#/more');await p.reload();await sleep(1200);
await click('備份資料');
// write cap to a temp file for upload
require('fs').writeFileSync('/tmp/w/v2/tools/dl/backup-roundtrip.json',cap);
const fi=await p.$('input[type=file]');
if(fi){await fi.uploadFile('/tmp/w/v2/tools/dl/backup-roundtrip.json');}
else{await click('還原資料');await sleep(400);const fi2=await p.$('input[type=file]');if(fi2)await fi2.uploadFile('/tmp/w/v2/tools/dl/backup-roundtrip.json');}
await sleep(2000);
const after=await p.evaluate(()=>({cat:localStorage['mmv:vocabulary.catalog.v1']||'',msg:document.body.innerText.match(/已還原[^。\n]*/)?.[0]||''}));
console.log('restore msg:',after.msg);
console.log('catalog identical after restore:',before.cat!==''&&before.cat===after.cat);
console.log('pageerrors',errs.length,errs);
await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

const puppeteer=require('puppeteer-core');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const fs=require('fs');
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();await p.setViewport({width:390,height:844});
const errs=[];p.on('pageerror',e=>errs.push(String(e).slice(0,150)));
const client=await p.createCDPSession();
await client.send('Page.setDownloadBehavior',{behavior:'allow',downloadPath:'/tmp/w/v2/tools/dl'});
const base=process.argv[2];
await p.goto(base+'?nc='+Date.now());await sleep(1500);
// distinctive marker state: add a custom word via 新增單字 (smoke pattern)
await p.goto(base+'#/more');await p.reload();await sleep(1100);
const click=async t=>{const r=await p.evaluate(t=>{const x=[...document.querySelectorAll('button,label,a,summary')].find(x=>x.innerText.trim().includes(t)&&!x.disabled);if(x){x.click();return 1}return 0},t);await sleep(400);return r};
await click('新增單字');
await p.evaluate(()=>{const t=(l,v)=>{const f=[...document.querySelectorAll('.add-form label.field')].find(x=>x.innerText.trim().startsWith(l));if(!f)return;const i=f.querySelector('input');Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(i,v);i.dispatchEvent(new Event('input',{bubbles:true}))};t('單字','AuditMarkTest');t('中文意思','查核標記')});
await click('儲存單字');
const uw=await p.evaluate(()=>localStorage['mmv:vocabulary.userwords.v1']||'');
console.log('marker stored:',uw.includes('AuditMarkTest'));
// export backup
await p.goto(base+'#/more');await p.reload();await sleep(1100);
await click('備份資料');
await click('產生備份');
await sleep(2500);
const files=fs.readdirSync('/tmp/w/v2/tools/dl');
console.log('downloads:',files);
let backupOk=false,fmt='';
for(const f of files){
  try{const j=JSON.parse(fs.readFileSync('/tmp/w/v2/tools/dl/'+f,'utf8'));fmt=Object.keys(j).join(',');backupOk=fmt.includes('mm-vocabulary-v1')||JSON.stringify(j).includes('mm-vocabulary-v1');
  console.log('file:',f,'keys:',fmt.slice(0,120));}catch(e){console.log('file:',f,'parse err')}
}
// wipe + restore
await p.evaluate(()=>localStorage.clear());
await p.goto(base+'#/more');await p.reload();await sleep(1200);
const wiped=await p.evaluate(()=>!localStorage['mmv:vocabulary.userwords.v1']);
console.log('wiped:',wiped);
await click('備份資料');
// find file input for restore
const fi=await p.$('input[type=file]');
if(fi&&files.length){await fi.uploadFile('/tmp/w/v2/tools/dl/'+files[0]);await sleep(2000);}
else {
  // maybe 還原資料 opens a picker via button click -> input appears
  await click('還原資料');await sleep(500);
  const fi2=await p.$('input[type=file]');
  if(fi2&&files.length){await fi2.uploadFile('/tmp/w/v2/tools/dl/'+files[0]);await sleep(2000);}
}
const restored=await p.evaluate(()=>(localStorage['mmv:vocabulary.userwords.v1']||'').includes('AuditMarkTest'));
const msg=await p.evaluate(()=>document.body.innerText.split('\n').filter(x=>/還原|无效|無效|取代/.test(x)).slice(0,3));
console.log('restored marker:',restored,'| msgs:',JSON.stringify(msg));
console.log('pageerrors',errs.length,errs);
await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

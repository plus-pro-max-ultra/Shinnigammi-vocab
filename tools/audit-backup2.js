const puppeteer=require('puppeteer-core');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();await p.setViewport({width:390,height:844});
const errs=[];p.on('pageerror',e=>errs.push(String(e).slice(0,150)));
const client=await p.createCDPSession();
await client.send('Page.setDownloadBehavior',{behavior:'allow',downloadPath:'/tmp/w/v2/tools/dl'});
await p.goto(process.argv[2]+'?nc='+Date.now());await sleep(1500);
// seed AFTER app ready
await p.evaluate(()=>{
  const cat=JSON.parse(localStorage['mmv:vocabulary.catalog.v1']||'{}');
  cat.entries=cat.entries||{};cat.entries['jp-007']={familiarity:3,seen:5,correct:4};
  localStorage['mmv:vocabulary.catalog.v1']=JSON.stringify(cat);
});
await p.goto(process.argv[2]+'?nc2='+Date.now()+'#/more');await sleep(1200);
const r=await p.evaluate(()=>{const x=[...document.querySelectorAll('button,label,a,summary,div,span')].find(e=>e.innerText&&e.innerText.trim()==='備份資料');if(x){x.click();return 'ok'}return 'no'});
await sleep(900);
console.log('nav backup:',r);
const txt=await p.evaluate(()=>document.body.innerText.split('\n').filter(x=>x.trim()).slice(0,20));
console.log('backup page:',JSON.stringify(txt));
await p.screenshot({path:'tools/audit-backup-page.png'});
console.log('pageerrors',errs.length,errs);
await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

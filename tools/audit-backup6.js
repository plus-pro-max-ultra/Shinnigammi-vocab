const puppeteer=require('puppeteer-core');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();await p.setViewport({width:390,height:844});
const base=process.argv[2];
await p.goto(base+'#/more');await p.reload();await sleep(1300);
const click=async t=>{const r=await p.evaluate(t=>{const x=[...document.querySelectorAll('button,label,a,summary')].find(x=>x.innerText.trim().includes(t)&&!x.disabled);if(x){x.click();return 1}return 0},t);await sleep(500);return r};
await click('備份資料');await click('產生備份');await sleep(1500);
const info=await p.evaluate(()=>({
  textareas:[...document.querySelectorAll('textarea')].map(t=>t.value.slice(0,80)),
  anchors:[...document.querySelectorAll('a[download],a[href^="blob:"],a[href^="data:"]')].map(a=>({dl:a.download,href:a.href.slice(0,60)})),
  bodyTail:document.body.innerText.split('\n').filter(x=>x.trim()).slice(-8)
}));
console.log(JSON.stringify(info,null,1).slice(0,800));
await p.screenshot({path:'tools/audit-backup-after-gen.png'});
await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

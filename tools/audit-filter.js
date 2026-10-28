const puppeteer=require('puppeteer-core');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();await p.setViewport({width:390,height:844});
const errs=[];p.on('pageerror',e=>errs.push(String(e).slice(0,150)));
await p.goto(process.argv[2]+'?nc='+Date.now());await sleep(1400);
await p.evaluate(()=>{const x=[...document.querySelectorAll('button,label,a,summary,div,span')].find(e=>e.offsetParent&&e.innerText.trim()==='單字庫');if(x)x.click()});
await sleep(800);
await p.evaluate(()=>{const x=[...document.querySelectorAll('button,label,a,summary,div,span')].find(e=>e.offsetParent&&e.innerText.trim()==='篩選與排序');if(x)x.click()});
await sleep(700);
const txt=await p.evaluate(()=>document.body.innerText.split('\n').filter(x=>x.trim()).slice(0,30));
console.log('filter sheet:',JSON.stringify(txt));
await p.screenshot({path:'tools/audit-bank-filter.png'});
console.log('pageerrors',errs.length,errs);
await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

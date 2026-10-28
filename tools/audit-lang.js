const puppeteer=require('puppeteer-core');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();await p.setViewport({width:390,height:844});
await p.goto(process.argv[2]+'?nc='+Date.now());await sleep(1400);
const top=await p.evaluate(()=>document.body.innerText.split('\n').filter(x=>x.trim()).slice(0,10));
console.log('course top:',JSON.stringify(top));
const seg=await p.evaluate(()=>[...document.querySelectorAll('button,label,a,[role=tab]')].filter(e=>e.offsetParent&&/日|德/.test(e.innerText)).map(e=>e.innerText.trim()).slice(0,10));
console.log('lang candidates:',JSON.stringify(seg));
await p.screenshot({path:'tools/audit-course-top.png'});
await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

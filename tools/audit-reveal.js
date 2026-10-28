const puppeteer=require('puppeteer-core');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
const base=process.argv[2];
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();await p.setViewport({width:390,height:844});
const errs=[];p.on('pageerror',e=>errs.push(String(e)));
await p.goto(base+'?nc='+Date.now(),{waitUntil:'networkidle0'});
await p.evaluate(()=>{const x=[...document.querySelectorAll('button,label,a,summary,div,span')].find(e=>e.innerText&&e.innerText.trim()==='單字庫');if(x)x.click();});
await sleep(700);
await p.evaluate(()=>{const el=[...document.querySelectorAll('*')].find(e=>e.children.length===0&&e.textContent.trim()==='食べる');let n=el;for(let i=0;i<5&&n;i++){if(n.tagName==='BUTTON'){n.click();break}n=n.parentElement}});
await sleep(900);
const before=await p.evaluate(()=>document.body.innerText.includes('吃麵包'));
await p.evaluate(()=>{const el=[...document.querySelectorAll('*')].find(e=>e.children.length===0&&e.textContent.includes('パンを食べます'));if(el)el.click();});
await sleep(600);
const after=await p.evaluate(()=>document.body.innerText.includes('吃麵包'));
console.log('translation hidden before:',!before,' visible after tap:',after, (after&&!before)?'PASS tap-reveal':'CHECK');
await p.screenshot({path:'tools/audit-detail-reveal.png'});
// check examples count = 2 on this page
const exCount=await p.evaluate(()=>{const t=document.body.innerText;return (t.match(/◖\)\)/g)||[]).length});
console.log('audio-marked lines (proxy for examples present):',exCount);
console.log('pageerrors',errs.length);
await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

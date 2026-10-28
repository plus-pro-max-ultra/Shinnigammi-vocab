const puppeteer=require('puppeteer-core');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();await p.setViewport({width:390,height:844});
await p.goto(process.argv[2]+'?nc='+Date.now(),{waitUntil:'networkidle0'});
await p.evaluate(()=>{const x=[...document.querySelectorAll('button,label,a,summary,div,span')].find(e=>e.innerText&&e.innerText.trim()==='單字庫');if(x)x.click();});
await sleep(800);
await p.evaluate(()=>{const el=[...document.querySelectorAll('*')].find(e=>e.children.length===0&&e.tagName!=='SCRIPT'&&e.textContent.trim()==='食べる');let n=el;for(let i=0;i<5&&n;i++){if(n.tagName==='BUTTON'){n.click();break}n=n.parentElement}});
await sleep(1000);
const html=await p.evaluate(()=>{const s=document.querySelector('section.examples');return s?s.outerHTML.slice(0,1500):'none'});
console.log(html);
await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

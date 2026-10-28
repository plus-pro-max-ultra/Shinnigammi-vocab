const puppeteer=require('puppeteer-core');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();await p.setViewport({width:390,height:844});
const errs=[];p.on('pageerror',e=>errs.push(String(e)));
await p.goto(process.argv[2]+'?nc='+Date.now(),{waitUntil:'networkidle0'});
await p.evaluate(()=>{const x=[...document.querySelectorAll('button,label,a,summary,div,span')].find(e=>e.innerText&&e.innerText.trim()==='單字庫');if(x)x.click();});
await sleep(800);
await p.evaluate(()=>{const el=[...document.querySelectorAll('*')].find(e=>e.children.length===0&&e.tagName!=='SCRIPT'&&e.textContent.trim()==='食べる');let n=el;for(let i=0;i<5&&n;i++){if(n.tagName==='BUTTON'){n.click();break}n=n.parentElement}});
await sleep(1000);
const r=await p.evaluate(()=>{const s=document.querySelector('button.translation-slot');if(!s)return 'no-slot';s.click();return 'clicked'});
await sleep(500);
const ok=await p.evaluate(()=>({zh:document.body.innerText.includes('吃麵包'),exp:document.querySelector('button.translation-slot')?.getAttribute('aria-expanded')}));
console.log(r,'translation:',ok.zh,'aria-expanded:',ok.exp, ok.zh&&ok.exp==='true'?'PASS tap-reveal':'FAIL');
await p.screenshot({path:'tools/audit-detail-revealed.png'});
console.log('pageerrors',errs.length);
await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

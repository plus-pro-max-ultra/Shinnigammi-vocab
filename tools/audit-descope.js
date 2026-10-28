const puppeteer=require('puppeteer-core');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();await p.setViewport({width:390,height:844});
const errs=[];p.on('pageerror',e=>errs.push(String(e).slice(0,150)));
const base=process.argv[2];
await p.goto(base+'?nc='+Date.now());await sleep(1400);
await p.evaluate(()=>{const x=[...document.querySelectorAll('button,label,a,summary,div,span')].find(e=>e.offsetParent&&e.innerText.trim()==='日文 ⇄ 德文');if(x)x.click()});
await sleep(1000);
const top=await p.evaluate(()=>document.body.innerText.split('\n').filter(x=>x.trim()).slice(0,12));
console.log('after switch:',JSON.stringify(top));
await p.goto(base+'#/quiz');await sleep(1000);
const q=await p.evaluate(()=>document.body.innerText.split('\n').filter(x=>x.trim()).slice(0,30));
console.log('de quiz page:',JSON.stringify(q));
await p.screenshot({path:'tools/audit-de-quiz.png'});
console.log('pageerrors',errs.length,errs);
await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

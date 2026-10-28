const puppeteer=require('puppeteer-core');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();await p.setViewport({width:390,height:844});
const errs=[];p.on('pageerror',e=>errs.push(String(e).slice(0,150)));
const base=process.argv[2];
await p.goto(base+'#/quiz');await p.reload();await sleep(1300);
const top=await p.evaluate(()=>document.body.innerText.split('\n').filter(x=>x.trim()).slice(0,6));
console.log('quiz top:',JSON.stringify(top));
// find language toggle candidates
const cands=await p.evaluate(()=>[...document.querySelectorAll('button,label,a')].filter(e=>e.offsetParent&&e.innerText.trim().length<8).map(e=>e.innerText.trim()).slice(0,25));
console.log('small buttons:',JSON.stringify(cands));
await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

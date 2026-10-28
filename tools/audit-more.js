const puppeteer=require('puppeteer-core');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();await p.setViewport({width:390,height:844});
const errs=[];p.on('pageerror',e=>errs.push(String(e).slice(0,200)));
// variant A: query before hash (correct cache-bust)
await p.goto(process.argv[2]+'?nc='+Date.now()+'#/more');await sleep(1200);
const a=await p.evaluate(()=>document.body.innerText.split('\n').filter(x=>x.trim()).slice(0,20));
console.log('A ?nc#/more:',JSON.stringify(a));
await p.screenshot({path:'tools/audit-more.png'});
// variant B: bare #/more no query
await p.goto(process.argv[2]+'#/more');await p.reload();await sleep(1200);
const bb=await p.evaluate(()=>document.body.innerText.split('\n').filter(x=>x.trim()).slice(0,20));
console.log('B bare #/more:',JSON.stringify(bb));
// variant C: query AFTER hash (what broke)
await p.goto(process.argv[2]+'#/more?nc=1');await sleep(1200);
const c=await p.evaluate(()=>document.body.innerText.split('\n').filter(x=>x.trim()).slice(0,8));
console.log('C #/more?nc=1:',JSON.stringify(c));
console.log('pageerrors',errs.length,errs);
await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

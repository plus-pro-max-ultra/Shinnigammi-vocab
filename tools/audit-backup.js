const puppeteer=require('puppeteer-core');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();await p.setViewport({width:390,height:844});
const errs=[];p.on('pageerror',e=>errs.push(String(e)));
await p.goto(process.argv[2]+'?nc='+Date.now(),{waitUntil:'networkidle0'});
// seed: set familiarity for jp-007 + a marker custom word via localStorage
await p.evaluate(()=>{
  const cat=JSON.parse(localStorage['mmv:vocabulary.catalog.v1']||'{"entries":{}}');
  cat.entries=cat.entries||{};cat.entries['jp-007']={familiarity:3,seen:5,correct:4};
  localStorage['mmv:vocabulary.catalog.v1']=JSON.stringify(cat);
});
await p.goto(process.argv[2]+'#/more?nc='+Date.now());await sleep(900);
const moreTxt=await p.evaluate(()=>document.body.innerText.split('\n').filter(x=>x.trim()).slice(0,25));
console.log('more page:',JSON.stringify(moreTxt));
await p.screenshot({path:'tools/audit-more.png'});
console.log('pageerrors',errs.length);
await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

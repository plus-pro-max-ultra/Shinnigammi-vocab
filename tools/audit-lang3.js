const puppeteer=require('puppeteer-core');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();await p.setViewport({width:390,height:844});
const errs=[];p.on('pageerror',e=>errs.push(String(e).slice(0,150)));
const base=process.argv[2];
await p.goto(base+'?nc='+Date.now());await sleep(1400);
await p.click('button.lang-switch');await sleep(800);
const after=await p.evaluate(()=>document.body.innerText.split('\n').filter(x=>x.trim()).slice(0,14));
console.log('after lang-switch:',JSON.stringify(after));
const ls=await p.evaluate(()=>localStorage['mmv:vocabulary.language.v1']);
console.log('language key:',ls);
// if a sheet appeared with 德文 option
const sheet=await p.evaluate(()=>{const x=[...document.querySelectorAll('button,label,div,span')].filter(e=>e.offsetParent&&e.children.length===0&&/^德文$/.test(e.innerText.trim()));if(x.length){x[0].click();return 'clicked 德文'}return 'no sheet'});
await sleep(800);
console.log('sheet:',sheet,'| lang now:',await p.evaluate(()=>localStorage['mmv:vocabulary.language.v1']));
const quiz=await p.evaluate(()=>{location.hash='#/quiz';return 1});await sleep(1200);
const q=await p.evaluate(()=>document.body.innerText.split('\n').filter(x=>x.trim()).slice(0,26));
console.log('quiz after de:',JSON.stringify(q));
console.log('pageerrors',errs.length,errs);
await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

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
// walk ancestors of the sentence, click each from leaf up to 6 levels, check after each
const res=await p.evaluate(async()=>{
  const sleep=ms=>new Promise(r=>setTimeout(r,ms));
  const has=()=>document.body.innerText.includes('吃麵包');
  const leaf=[...document.querySelectorAll('*')].filter(e=>e.children.length===0&&e.textContent.includes('パンを食べます')).pop();
  if(!leaf) return 'no-leaf';
  let n=leaf, log=[];
  for(let i=0;i<7&&n&&n!==document.body;i++){
    n.click(); await sleep(250);
    log.push(i+':'+n.tagName+'.'+(typeof n.className==='string'?n.className:'')+(has()?' ->REVEALED':''));
    if(has()) return log.join(' | ');
    n=n.parentElement;
  }
  return 'NOT REVEALED | '+log.join(' | ');
});
console.log(res);
console.log('pageerrors',errs.length);
await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

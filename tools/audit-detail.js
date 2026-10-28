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
const struct=await p.evaluate(()=>{
  const el=[...document.querySelectorAll('*')].find(e=>e.children.length===0&&e.textContent.trim()==='食べる');
  if(!el) return 'notfound';
  let n=el,chain=[];
  for(let i=0;i<5&&n;i++){chain.push(n.tagName+'.'+(n.className&&n.className.baseVal===undefined?n.className:'')+(n.onclick?'[onclick]':''));n=n.parentElement}
  return chain.join(' < ');
});
console.log('row chain:',struct);
// click the outermost row-ish ancestor that has pointer cursor or onclick
const r=await p.evaluate(()=>{
  const el=[...document.querySelectorAll('*')].find(e=>e.children.length===0&&e.textContent.trim()==='食べる');
  if(!el)return 0;
  let n=el;
  for(let i=0;i<5&&n;i++){
    const cs=getComputedStyle(n);
    if(n.tagName==='BUTTON'||n.tagName==='A'||n.onclick||cs.cursor==='pointer'){n.click();return n.tagName+' clicked'}
    n=n.parentElement;
  }
  el.click();return 'leaf clicked';
});
await sleep(1000);
console.log('click result:',r);
await p.screenshot({path:'tools/audit-word-detail.png'});
const det=await p.evaluate(()=>document.body.innerText.split('\n').slice(0,30));
console.log('page head:',JSON.stringify(det));
console.log('pageerrors',errs.length);
await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

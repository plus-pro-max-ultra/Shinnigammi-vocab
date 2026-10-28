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
const r=await p.evaluate(()=>{
  const sent=[...document.querySelectorAll('*')].find(e=>e.children.length<=2&&e.textContent.includes('パンを食べます'));
  if(!sent) return 'no-sent';
  const box=sent.getBoundingClientRect();
  const el=document.elementFromPoint(box.left+40, box.bottom+24);
  if(el){el.click();return 'clicked '+el.tagName+'.'+el.className+' text='+(el.textContent||'').slice(0,30)}
  return 'no-el'});
await sleep(600);
const after=await p.evaluate(()=>document.body.innerText.includes('吃麵包'));
console.log(r,'| translation visible:',after, after?'PASS tap-reveal':'FAIL tap-reveal');
await p.screenshot({path:'tools/audit-detail-reveal2.png'});
console.log('pageerrors',errs.length);
await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

const puppeteer=require('puppeteer-core');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
const base=process.argv[2];
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();await p.setViewport({width:390,height:844});
const errs=[];p.on('pageerror',e=>errs.push(String(e)));
await p.goto(base+'?nc='+Date.now(),{waitUntil:'networkidle0'});
await p.evaluate(()=>{const x=[...document.querySelectorAll('button,label,a,summary,div,span')].find(e=>e.innerText&&e.innerText.trim()==='單字庫');if(x)x.click();});
await sleep(800);
await p.evaluate(()=>{const el=[...document.querySelectorAll('*')].find(e=>e.children.length===0&&e.tagName!=='SCRIPT'&&e.textContent.trim()==='食べる');let n=el;for(let i=0;i<5&&n;i++){if(n.tagName==='BUTTON'){n.click();break}n=n.parentElement}});
await sleep(1000);
const res=await p.evaluate(async()=>{
  const sleep=ms=>new Promise(r=>setTimeout(r,ms));
  const has=()=>document.body.innerText.includes('吃麵包');
  const all=[...document.querySelectorAll('body *')].filter(e=>e.tagName!=='SCRIPT'&&e.offsetParent&&e.innerText&&e.innerText.replace(/\s/g,'').includes('パンを食べます。'));
  if(!all.length) return 'no-container';
  // smallest container
  all.sort((a,b)=>a.innerText.length-b.innerText.length);
  const cont=all[0];
  let n=cont, log=[];
  for(let i=0;i<8&&n&&n!==document.body;i++){
    n.click(); await sleep(300);
    const cn=typeof n.className==='string'?n.className:'';
    log.push(i+':'+n.tagName+'.'+cn.slice(0,40)+(has()?' ->REVEALED':''));
    if(has()) return 'REVEAL OK | '+log.join(' | ');
    n=n.parentElement;
  }
  return 'NOT REVEALED | '+log.join(' | ');
});
console.log(res);
await p.screenshot({path:'tools/audit-detail-reveal6.png'});
console.log('pageerrors',errs.length);
await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

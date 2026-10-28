const puppeteer=require('puppeteer-core');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
const base=process.argv[2];
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();await p.setViewport({width:390,height:844});
const errs=[];p.on('pageerror',e=>errs.push(String(e)));
await p.goto(base+'?nc='+Date.now(),{waitUntil:'networkidle0'});
const navR=await p.evaluate(()=>{const x=[...document.querySelectorAll('button,label,a,summary,div,span')].find(e=>e.innerText&&e.innerText.trim()==='單字庫');if(x){x.click();return 'ok'}return 'no-tab'});
await sleep(800);
const list=await p.evaluate(()=>document.body.innerText.split('\n').slice(0,4).join('|'));
await p.evaluate(()=>{const el=[...document.querySelectorAll('*')].find(e=>e.children.length===0&&e.tagName!=='SCRIPT'&&e.textContent.trim()==='食べる');let n=el;for(let i=0;i<5&&n;i++){if(n.tagName==='BUTTON'){n.click();break}n=n.parentElement}});
await sleep(1000);
const onDetail=await p.evaluate(()=>document.body.innerText.includes('辭書形'));
const res=await p.evaluate(async()=>{
  const sleep=ms=>new Promise(r=>setTimeout(r,ms));
  const has=()=>document.body.innerText.includes('吃麵包');
  const cands=[...document.querySelectorAll('body *')].filter(e=>e.tagName!=='SCRIPT'&&e.offsetParent&&e.children.length===0&&e.textContent.includes('パンを食べます'));
  if(!cands.length) return 'no-leaf';
  const leaf=cands[cands.length-1];
  let n=leaf, log=[];
  for(let i=0;i<8&&n&&n!==document.body;i++){
    n.click(); await sleep(300);
    const cn=typeof n.className==='string'?n.className:'';
    log.push(i+':'+n.tagName+'.'+cn.slice(0,40)+(has()?' ->REVEALED':''));
    if(has()) return log.join(' | ');
    n=n.parentElement;
  }
  return 'NOT REVEALED | '+log.join(' | ');
});
console.log('nav:',navR,'| list:',list,'| onDetail:',onDetail);
console.log(res);
console.log('pageerrors',errs.length);
await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

const puppeteer=require('puppeteer-core');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();await p.setViewport({width:390,height:844});
const errs=[];p.on('pageerror',e=>errs.push(String(e).slice(0,200)));
const base=process.argv[2];
await p.goto(base+'#/grammar');await p.reload();await sleep(1300);
const t=await p.evaluate(()=>document.body.innerText.split('\n').filter(x=>x.trim()).slice(0,18));
console.log('#/grammar direct:',JSON.stringify(t));
await p.screenshot({path:'tools/audit-jp-grammar3.png'});
// now the real link click from detail
await p.goto(base+'?nc='+Date.now());await sleep(1300);
await p.evaluate(()=>{const x=[...document.querySelectorAll('button,label,a,summary,div,span')].find(e=>e.offsetParent&&e.innerText.trim()==='單字庫');if(x)x.click()});
await sleep(700);
await p.evaluate(()=>{const el=[...document.querySelectorAll('*')].find(e=>e.children.length===0&&e.tagName!=='SCRIPT'&&e.textContent.trim()==='食べる');let n=el;for(let i=0;i<5&&n;i++){if(n.tagName==='BUTTON'){n.click();break}n=n.parentElement}});
await sleep(1000);
const box=await p.evaluate(()=>{const el=[...document.querySelectorAll('a')].find(e=>e.offsetParent&&/前往文法區/.test(e.innerText||''));if(!el)return null;const r=el.getBoundingClientRect();return {x:r.x+r.width/2,y:r.y+r.height/2}});
if(box){await p.mouse.click(box.x,box.y);await sleep(1200);}
const after=await p.evaluate(()=>({hash:location.hash,head:document.body.innerText.split('\n').filter(x=>x.trim()).slice(0,8)}));
console.log('after real link click:',JSON.stringify(after));
console.log('pageerrors',errs.length,errs);
await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

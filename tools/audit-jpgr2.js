const puppeteer=require('puppeteer-core');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();await p.setViewport({width:390,height:844});
const errs=[];p.on('pageerror',e=>errs.push(String(e).slice(0,150)));
const base=process.argv[2];
await p.goto(base+'?nc='+Date.now());await sleep(1400);
// search 同じ to see 連体詞 display
await p.evaluate(()=>{const x=[...document.querySelectorAll('button,label,a,summary,div,span')].find(e=>e.offsetParent&&e.innerText.trim()==='查詢');if(x)x.click()});
await sleep(700);
await p.evaluate(()=>{const i=[...document.querySelectorAll('input')].find(i=>i.offsetParent);Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(i,'同じ');i.dispatchEvent(new Event('input',{bubbles:true}))});
await sleep(900);
const row=await p.evaluate(()=>{const els=[...document.querySelectorAll('body *')].filter(e=>e.tagName!=='SCRIPT'&&e.offsetParent&&e.innerText&&e.innerText.replace(/\s/g,'').startsWith('同じ'));els.sort((a,b)=>a.innerText.length-b.innerText.length);return els[0]?.innerText||'none'});
console.log('search 同じ row:',JSON.stringify(row));
await p.screenshot({path:'tools/audit-rentaishi-search.png'});
// jp grammar area: from detail page click 前往文法區 using real mouse
await p.evaluate(()=>{const x=[...document.querySelectorAll('button,label,a,summary,div,span')].find(e=>e.offsetParent&&e.innerText.trim()==='單字庫');if(x)x.click()});
await sleep(700);
await p.evaluate(()=>{const el=[...document.querySelectorAll('*')].find(e=>e.children.length===0&&e.tagName!=='SCRIPT'&&e.textContent.trim()==='食べる');let n=el;for(let i=0;i<5&&n;i++){if(n.tagName==='BUTTON'){n.click();break}n=n.parentElement}});
await sleep(1000);
const handle=await p.evaluateHandle(()=>[...document.querySelectorAll('a,button,div,span')].find(e=>e.offsetParent&&/前往文法區/.test(e.innerText||'')));
if(handle){
  const el=handle.asElement();
  if(el){await el.click();await sleep(1200);}
}
const after=await p.evaluate(()=>({hash:location.hash,head:document.body.innerText.split('\n').filter(x=>x.trim()).slice(0,14)}));
console.log('after 前往文法區:',JSON.stringify(after));
await p.screenshot({path:'tools/audit-jp-grammar2.png'});
console.log('pageerrors',errs.length,errs);
await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

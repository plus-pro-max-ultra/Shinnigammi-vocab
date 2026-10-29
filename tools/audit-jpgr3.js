const puppeteer=require('puppeteer-core');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();await p.setViewport({width:390,height:844});
const errs=[];p.on('pageerror',e=>errs.push(String(e).slice(0,200)));
const base=process.argv[2];
// jp course page: look for 文法 entry
await p.goto(base+'?nc='+Date.now());await sleep(1400);
const course=await p.evaluate(()=>document.body.innerText.split('\n').filter(x=>x.trim()));
console.log('jp course page full:',JSON.stringify(course));
// the link element on detail page: href/target
await p.evaluate(()=>{const x=[...document.querySelectorAll('button,label,a,summary,div,span')].find(e=>e.offsetParent&&e.innerText.trim()==='單字庫');if(x)x.click()});
await sleep(700);
await p.evaluate(()=>{const el=[...document.querySelectorAll('*')].find(e=>e.children.length===0&&e.tagName!=='SCRIPT'&&e.textContent.trim()==='食べる');let n=el;for(let i=0;i<5&&n;i++){if(n.tagName==='BUTTON'){n.click();break}n=n.parentElement}});
await sleep(1000);
const link=await p.evaluate(()=>{
  const el=[...document.querySelectorAll('a,button')].find(e=>e.offsetParent&&/前往文法區/.test(e.innerText||''));
  if(!el)return 'no-link';
  return {tag:el.tagName,href:el.getAttribute('href'),cls:el.className,outer:el.outerHTML.slice(0,200)}});
console.log('link:',JSON.stringify(link));
console.log('pageerrors',errs.length,errs);
await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

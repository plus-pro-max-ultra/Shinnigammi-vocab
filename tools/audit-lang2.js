const puppeteer=require('puppeteer-core');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();await p.setViewport({width:390,height:844});
await p.goto(process.argv[2]+'?nc='+Date.now());await sleep(1400);
const html=await p.evaluate(()=>{
  const el=[...document.querySelectorAll('*')].find(e=>e.children.length===0&&e.offsetParent&&e.textContent.trim()==='日文 ⇄ 德文');
  if(!el)return 'not found';
  let n=el;for(let i=0;i<3&&n;i++){if(n.outerHTML.length>400)return n.outerHTML.slice(0,500);n=n.parentElement}
  return el.parentElement?.outerHTML?.slice(0,500)||'?'});
console.log(html);
await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

const puppeteer=require('puppeteer-core');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();await p.setViewport({width:390,height:844});
const errs=[];p.on('pageerror',e=>errs.push(String(e).slice(0,150)));
const base=process.argv[2];
await p.goto(base+'?nc='+Date.now());await sleep(1400);
// jp scope pool counts first
await p.evaluate(()=>{location.hash='#/quiz'});await sleep(1200);
const scopes=['語言基礎','JLPT 字庫 N5','JLPT 字庫 N4','問候與介紹','日常動作','時間','飲食','形容詞','家人與人物','數字與計數','購物與衣著'];
const counts={};
for(const s of scopes){
  await p.evaluate(s=>{const t=[...document.querySelectorAll('button,label')].find(b=>b.offsetParent&&b.innerText.trim()===s);if(t)t.click()},s);
  await sleep(400);
  const cnt=await p.evaluate(()=>{const m=document.body.innerText.match(/範圍內的單字：(\d+)/);return m?m[1]:'?'});
  counts[s]=cnt;
  await p.evaluate(s=>{const t=[...document.querySelectorAll('button,label')].find(b=>b.offsetParent&&b.innerText.trim()===s);if(t)t.click()},s);
  await sleep(250);
}
console.log('jp scope counts:',JSON.stringify(counts));
// grammar area from word detail
await p.evaluate(()=>{location.hash='#/'});await sleep(1000);
const g=await p.evaluate(()=>{const x=[...document.querySelectorAll('button,label,a,summary,div,span')].find(e=>e.offsetParent&&e.innerText.trim()==='單字庫');if(x)x.click();return 1});
await sleep(700);
await p.evaluate(()=>{const el=[...document.querySelectorAll('*')].find(e=>e.children.length===0&&e.tagName!=='SCRIPT'&&e.textContent.trim()==='食べる');let n=el;for(let i=0;i<5&&n;i++){if(n.tagName==='BUTTON'){n.click();break}n=n.parentElement}});
await sleep(1000);
const gg=await p.evaluate(()=>{const x=[...document.querySelectorAll('a,button,div,span')].find(e=>e.offsetParent&&/前往文法區/.test(e.innerText));if(x){x.click();return 'clicked'}return 'no-link'});
await sleep(1000);
const gtxt=await p.evaluate(()=>document.body.innerText.split('\n').filter(x=>x.trim()).slice(0,18));
console.log('jp grammar nav:',gg,'|',JSON.stringify(gtxt));
await p.screenshot({path:'tools/audit-jp-grammar.png'});
console.log('pageerrors',errs.length,errs);
await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

const puppeteer=require('puppeteer-core');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();await p.setViewport({width:390,height:844});
const errs=[];p.on('pageerror',e=>errs.push(String(e).slice(0,150)));
const base=process.argv[2];
await p.goto(base+'?nc='+Date.now());await sleep(1400);
await p.click('button.lang-switch');await sleep(800);
await p.evaluate(()=>{location.hash='#/quiz'});await sleep(1200);
const scopes=['Grundlagen · 語言基礎','Lektion 1','Lektion 2','Lektion 3'];
const counts={};
for(const s of scopes){
  // multi-select: first deselect 全部條目, select only target
  await p.evaluate(()=>{const x=[...document.querySelectorAll('button')].find(b=>b.offsetParent&&b.innerText.trim().startsWith('全部條目'));if(x&&x.getAttribute('aria-pressed')!=='false'&&x.className.includes('on')||x&&x.getAttribute('aria-selected')==='true')x.click()});
  await sleep(250);
  const r=await p.evaluate(s=>{
    const btns=[...document.querySelectorAll('button,label')].filter(b=>b.offsetParent);
    // reset: click 全部 if currently mixed? Instead read current count, click target, read again
    const t=btns.find(b=>b.innerText.trim()===s);
    if(t)t.click();
    return 1;
  },s);
  await sleep(500);
  const cnt=await p.evaluate(()=>{const m=document.body.innerText.match(/範圍內的單字：(\d+)/);return m?m[1]:'?'});
  counts[s]=cnt;
  // deselect before next
  await p.evaluate(s=>{const btns=[...document.querySelectorAll('button,label')].filter(b=>b.offsetParent);const t=btns.find(b=>b.innerText.trim()===s);if(t)t.click()},s);
  await sleep(300);
}
console.log('de scope counts (additive to 全部=291 baseline):',JSON.stringify(counts));
// grammar course
await p.evaluate(()=>{location.hash='#/'});await sleep(1000);
const g=await p.evaluate(()=>{const x=[...document.querySelectorAll('button,label,a,summary,div')].find(e=>e.offsetParent&&e.innerText.trim().startsWith('文法課程'));if(x){x.click();return 'ok'}return 'no'});
await sleep(1000);
const gtxt=await p.evaluate(()=>document.body.innerText.split('\n').filter(x=>x.trim()).slice(0,20));
console.log('grammar page:',g,'|',JSON.stringify(gtxt));
await p.screenshot({path:'tools/audit-de-grammar.png'});
console.log('pageerrors',errs.length,errs);
await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

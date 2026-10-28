const puppeteer=require('puppeteer-core');
const sleep=(ms)=>new Promise(r=>setTimeout(r,ms));
(async()=>{
 const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox','--disable-gpu']});
 const p=await b.newPage();
 await p.setViewport({width:390,height:844,isMobile:true,deviceScaleFactor:2});
 await p.goto('https://plus-pro-max-ultra.github.io/Shinnigammi-vocab/',{waitUntil:'networkidle0'});
 await sleep(500);
 await p.evaluate(()=>{const s=document.querySelector('.lang-switch'); s&&s.click();});
 await sleep(500);
 await p.evaluate(()=>{const b=[...document.querySelectorAll('.bottom-nav button')].find(x=>x.textContent.includes('查詢'));b&&b.click();});
 await sleep(700);
 await p.evaluate((t)=>{
   const inp=document.querySelector('.search-bar input')||document.querySelector('input');
   const setter=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,'value').set;
   setter.call(inp,t); inp.dispatchEvent(new Event('input',{bubbles:true}));
 },'einmal');
 await sleep(700);
 const dump=await p.evaluate(()=>({
   txt:document.body.innerText.slice(0,260),
   rowCount:document.querySelectorAll('.word-row').length,
   strongBtns:[...document.querySelectorAll('button')].filter(r=>r.querySelector('strong')).length,
   firstRows:[...document.querySelectorAll('.word-row')].slice(0,3).map(r=>r.textContent.slice(0,40))
 }));
 console.log(JSON.stringify(dump,null,1));
 await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

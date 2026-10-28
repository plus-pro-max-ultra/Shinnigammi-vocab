const puppeteer=require('puppeteer-core');
const sleep=(ms)=>new Promise(r=>setTimeout(r,ms));
(async()=>{
 const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox','--disable-gpu']});
 const p=await b.newPage();
 await p.setViewport({width:390,height:844,isMobile:true,deviceScaleFactor:2});
 await p.goto('https://plus-pro-max-ultra.github.io/Shinnigammi-vocab/',{waitUntil:'networkidle0'});
 await sleep(400);
 const sw=await p.evaluate(()=>[...document.querySelectorAll('.lang-switch, .hdr-actions button, .screen-header button')].map(e=>e.className+':'+e.textContent.trim()));
 console.log('switches:',JSON.stringify(sw));
 // click lang switch if present
 await p.evaluate(()=>{const s=document.querySelector('.lang-switch'); s&&s.click();});
 await sleep(400);
 await p.evaluate(()=>{const b=[...document.querySelectorAll('.bottom-nav button')].find(x=>x.textContent.includes('查詢'));b&&b.click();});
 await sleep(400);
 await p.evaluate((t)=>{
   const inp=document.querySelector('input');
   const setter=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,'value').set;
   setter.call(inp,t); inp.dispatchEvent(new Event('input',{bubbles:true}));
 },'bisschen');
 await sleep(600);
 const res=await p.evaluate(()=>document.body.innerText.slice(0,200));
 console.log(JSON.stringify(res));
 await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

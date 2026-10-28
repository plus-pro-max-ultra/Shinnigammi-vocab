const puppeteer=require('puppeteer-core');
const sleep=(ms)=>new Promise(r=>setTimeout(r,ms));
(async()=>{
 const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox','--disable-gpu']});
 const p=await b.newPage();
 await p.setViewport({width:390,height:844,isMobile:true,deviceScaleFactor:2});
 await p.goto('https://plus-pro-max-ultra.github.io/Shinnigammi-vocab/',{waitUntil:'networkidle0'});
 await p.evaluate(()=>{const b=[...document.querySelectorAll('.bottom-nav button')].find(x=>x.textContent.includes('查詢'));b&&b.click();});
 await sleep(600);
 const before=await p.evaluate(()=>document.body.innerText.slice(0,200));
 console.log('SEARCH SCREEN:',JSON.stringify(before));
 await p.evaluate((t)=>{
   const inp=document.querySelector('input');
   const setter=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,'value').set;
   setter.call(inp,t); inp.dispatchEvent(new Event('input',{bubbles:true}));
 },'bisschen');
 await sleep(700);
 const after=await p.evaluate(()=>({txt:document.body.innerText.slice(0,300), classes:[...document.querySelectorAll('button')].slice(0,10).map(b=>b.className)}));
 console.log(JSON.stringify(after,null,1));
 await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

const puppeteer=require('puppeteer-core');
const sleep=(ms)=>new Promise(r=>setTimeout(r,ms));
(async()=>{
 const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox','--disable-gpu']});
 const p=await b.newPage();
 await p.setViewport({width:390,height:844,isMobile:true,deviceScaleFactor:2});
 await p.goto('https://plus-pro-max-ultra.github.io/Shinnigammi-vocab/',{waitUntil:'networkidle0'});
 const nav=await p.evaluate(()=>[...document.querySelectorAll('.bottom-nav button')].map(x=>x.textContent.trim()));
 console.log('nav:',JSON.stringify(nav));
 await p.evaluate(()=>{const b=[...document.querySelectorAll('.bottom-nav button')].find(x=>x.textContent.includes('單字')||x.textContent.includes('字'));b&&b.click();});
 await sleep(600);
 const scr=await p.evaluate(()=>({inputs:document.querySelectorAll('input').length, searchbars:document.querySelectorAll('.search-bar').length, rows:document.querySelectorAll('.word-row').length, bodyStart:document.body.innerText.slice(0,120)}));
 console.log(JSON.stringify(scr));
 await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

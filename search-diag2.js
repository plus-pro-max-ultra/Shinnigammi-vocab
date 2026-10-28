const puppeteer=require('puppeteer-core');
const sleep=(ms)=>new Promise(r=>setTimeout(r,ms));
(async()=>{
 const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox','--disable-gpu']});
 const p=await b.newPage();
 await p.setViewport({width:390,height:844,isMobile:true,deviceScaleFactor:2});
 await p.goto('https://plus-pro-max-ultra.github.io/Shinnigammi-vocab/',{waitUntil:'networkidle0'});
 await p.evaluate(()=>{const b=[...document.querySelectorAll('.bottom-nav button')].find(x=>x.textContent.includes('查詢'));b&&b.click();});
 await sleep(500);
 const hdr=await p.evaluate(()=>[...document.querySelectorAll('.screen-header *')].map(e=>e.tagName+':'+e.className+':'+e.textContent.trim().slice(0,20)));
 console.log(JSON.stringify(hdr,null,1));
 await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

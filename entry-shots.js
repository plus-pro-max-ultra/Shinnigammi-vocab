const puppeteer=require('puppeteer-core');
const sleep=(ms)=>new Promise(r=>setTimeout(r,ms));
(async()=>{
 const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox','--disable-gpu']});
 const p=await b.newPage();
 await p.setViewport({width:390,height:844,isMobile:true,deviceScaleFactor:2});
 for(const [term,file] of [['bisschen','/downloads/entry-bisschen.png'],['einmal','/downloads/entry-einmal.png'],['Entschuldigung','/downloads/entry-entschuldigung.png'],['verstehen','/downloads/entry-verstehen.png']]){
   await p.goto('https://plus-pro-max-ultra.github.io/Shinnigammi-vocab/',{waitUntil:'networkidle0'});
   await sleep(400);
   await p.evaluate(()=>{
     const de=[...document.querySelectorAll('.word-row')].some(r=>/[a-zA-ZäöüÄÖÜß]/.test(r.textContent)) && ![...document.querySelectorAll('.word-row')].some(r=>/[぀-ヿ一-鿿]/.test(r.textContent));
     if(!de){const s=document.querySelector('.lang-switch'); s&&s.click();}
   });
   await sleep(400);
   await p.evaluate(()=>{const b=[...document.querySelectorAll('.bottom-nav button')].find(x=>x.textContent.includes('查詢'));b&&b.click();});
   await sleep(700);
   const typed=await p.evaluate((t)=>{
     const inp=document.querySelector('.search-bar input')||document.querySelector('input');
     if(!inp) return false;
     const setter=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,'value').set;
     setter.call(inp,t); inp.dispatchEvent(new Event('input',{bubbles:true}));
     return true;
   },term);
   if(!typed){console.log(term,'NO INPUT');continue;}
   await sleep(600);
   const clicked=await p.evaluate((t)=>{
     const exact=[...document.querySelectorAll('.word-row')].find(r=>{
       const st=r.querySelector('strong'); return st && st.textContent.trim().toLowerCase()===t.toLowerCase();
     });
     const row=exact||[...document.querySelectorAll('.word-row')].find(r=>r.textContent.includes(t));
     if(row){row.click();return exact?'exact':'partial';} return false;
   },term);
   await sleep(800);
   if(!clicked){console.log(term,'NOT FOUND');continue;} if(clicked!=='exact'){console.log(term,'WARN partial match');}
   await p.screenshot({path:file});
   console.log(term,'ok');
 }
 await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

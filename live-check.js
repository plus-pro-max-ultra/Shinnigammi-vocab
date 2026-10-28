const puppeteer=require('puppeteer-core');
const sleep=(ms)=>new Promise(r=>setTimeout(r,ms));
(async()=>{
 const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox','--disable-gpu']});
 const p=await b.newPage();
 await p.setViewport({width:390,height:844,isMobile:true,deviceScaleFactor:2});
 const errors=[]; p.on('pageerror',e=>errors.push(String(e)));
 await p.goto('https://plus-pro-max-ultra.github.io/Shinnigammi-vocab/',{waitUntil:'networkidle0'});
 // version marker
 const ver=await p.evaluate(()=>document.body.innerText.match(/v14\.\d+/)?.[0]);
 console.log('version:',ver);
 // --- tiles quiz ---
 await p.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.textContent.includes('測驗'));b&&b.click();});
 await sleep(500);
 await p.evaluate(()=>{const b=[...document.querySelectorAll('.mode-tiles button')].find(x=>x.textContent.includes('字塊拼字'));b&&b.click();});
 await sleep(400);
 await p.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.textContent.trim()==='開始');b&&b.click();});
 await sleep(800);
 const grid=await p.evaluate(()=>[...document.querySelectorAll('.tile-grid button:not(.tile-idk):not(.tile-back)')].map(x=>x.textContent));
 console.log('grid tiles:',JSON.stringify(grid));
 await p.evaluate(()=>{document.querySelectorAll('.tile-grid button:not(.tile-idk):not(.tile-back)')[0].click();});
 await sleep(250);
 await p.evaluate(()=>{document.querySelectorAll('.tile-grid button:not(.tile-idk):not(.tile-back)')[0].click();});
 await sleep(300);
 const after=await p.evaluate(()=>({
   chips:[...document.querySelectorAll('.tile-answer button')].map(x=>x.textContent),
   usedCount:document.querySelectorAll('.tile-used').length,
   disabledTiles:[...document.querySelectorAll('.tile-grid button:not(.tile-idk):not(.tile-back)')].filter(x=>x.disabled).length
 }));
 console.log('after double-tap:',JSON.stringify(after));
 await p.screenshot({path:'/downloads/tiles-live-v1433.png'});
 // chip removal test: tap first chip to remove
 if(after.chips.length){ await p.evaluate(()=>{document.querySelector('.tile-answer button').click();}); await sleep(250);
   console.log('chips after removal tap:', await p.evaluate(()=>document.querySelectorAll('.tile-answer button').length)); }
 // --- entry detail via search ---
 async function shotEntry(term, file){
   await p.evaluate(()=>{const b=[...document.querySelectorAll('.bottom-nav button')].find(x=>x.textContent.includes('單字'));b&&b.click();});
   await sleep(500);
   const ok=await p.evaluate((t)=>{
     const inp=document.querySelector('.search-bar input');
     if(!inp) return 'no-input';
     inp.value=t; inp.dispatchEvent(new Event('input',{bubbles:true}));
     return 'typed';
   },term);
   await sleep(600);
   if(ok!=='typed'){ console.log(term,'search input missing'); return; }
   const clicked=await p.evaluate((t)=>{
     const row=[...document.querySelectorAll('.word-row')].find(r=>r.textContent.includes(t));
     if(row){row.click();return true;} return false;
   },term);
   await sleep(700);
   if(!clicked){ console.log(term,'row not found'); continue0; return; }
   await p.screenshot({path:file});
   console.log(term,'screenshot saved');
 }
 await shotEntry('bisschen','/downloads/entry-bisschen.png');
 await shotEntry('verstehen','/downloads/entry-verstehen.png');
 await shotEntry('Entschuldigung','/downloads/entry-entschuldigung.png');
 await shotEntry('einmal','/downloads/entry-einmal.png');
 console.log('page errors:',errors.length, errors.slice(0,3));
 await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

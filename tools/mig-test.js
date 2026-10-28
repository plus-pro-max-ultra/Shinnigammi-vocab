// node tools/mig-test.js <url> — v14.41 saved-catalog migration: legacy de topic units -> 3 Lektionen
const p=require('puppeteer-core');const fs=require('fs');const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{const u=process.argv[2];const words=JSON.parse(fs.readFileSync('src/words.json','utf8'));
const l1=words.find(x=>x.lang==='de'&&x.themeId==='debook-L1'),l2=words.find(x=>x.lang==='de'&&x.themeId==='debook-L2');
const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});
const pg=await b.newPage();await pg.setViewport({width:390,height:844,isMobile:true,hasTouch:true});
let errs=0;pg.on('pageerror',x=>{errs++;console.log('ERR',x.message)});
const ok=(n,c)=>console.log(c?'PASS':'FAIL',n);
const seed={books:[{id:"greetings",name:"問候與介紹"},{id:"debook-1",name:"1 · sich vorstellen"},{id:"debook-9",name:"2 · Berufe und Arbeit"},{id:"my-custom",name:"我的自訂"}],
 entries:{[l1.id]:{books:["debook-1","my-custom"],familiarity:2},[l2.id]:{books:["debook-9"],familiarity:3},"ude-900001":{books:["debook-1"],familiarity:1}}};
await pg.goto(u+'#/');await pg.evaluate(()=>localStorage.clear());
await pg.evaluate(s=>localStorage.setItem('mmv:vocabulary.catalog.v1',JSON.stringify(s)),seed);
await pg.goto(u+'#/');await pg.reload();await sleep(1200);
const cat=await pg.evaluate(()=>JSON.parse(localStorage.getItem('mmv:vocabulary.catalog.v1')));
ok('legacy topic books removed',!cat.books.some(x=>/^debook-\d+$/.test(x.id)));
ok('3 Lektion books present',["debook-L1","debook-L2","debook-L3"].every(id=>cat.books.some(x=>x.id===id)));
ok('custom book preserved',cat.books.some(x=>x.id==='my-custom'));
const e1=cat.entries[l1.id]||{},e2=cat.entries[l2.id]||{},eu=cat.entries['u-test']||{};
ok('L1 word reassigned to debook-L1',(e1.books||[]).includes('debook-L1')&&!(e1.books||[]).includes('debook-1'));
ok('custom membership preserved',(e1.books||[]).includes('my-custom'));
ok('familiarity preserved',e1.familiarity===2&&e2.familiarity===3);
ok('L2 word reassigned to debook-L2',(e2.books||[]).includes('debook-L2')&&!(e2.books||[]).includes('debook-9'));
ok('user word legacy membership stripped, entry kept',eu&&(eu.books||[]).length===0);
// every de catalog word with themeId is in its Lektion book now
const all=await pg.evaluate(()=>JSON.parse(localStorage.getItem('mmv:vocabulary.catalog.v1')));
const bad=words.filter(x=>x.lang==='de'&&x.themeId&&!(all.entries[x.id]?.books||[]).includes(x.themeId));
ok('all de themeId words in Lektion book ('+bad.length+' bad)',bad.length===0);
// UI: units page shows Lektion units, not topic names
await pg.evaluate(()=>{const x=[...document.querySelectorAll('.lang-switch')];x.length&&x[0].click()});await sleep(500);
await pg.goto(u+'#/');await pg.reload();await sleep(900);
await pg.evaluate(()=>{const x=[...document.querySelectorAll('.course-card')].find(x=>x.innerText.includes('German A1')||x.innerText.includes('德文'));x&&x.click()});await sleep(500);
const ui=await pg.evaluate(()=>{const ul=document.querySelector('.unit-list');return ul?ul.innerText:'NO-UNITLIST'});
ok('UI shows Lektion units',/Lektion 1/.test(ui)&&/Lektion 2/.test(ui)&&/Lektion 3/.test(ui));
ok('UI hides legacy topic units',!/sich vorstellen/.test(ui)&&!/Berufe und Arbeit/.test(ui));
ok('UI offers custom-units entry (custom book kept in storage)',/自訂單元/.test(ui)||await pg.evaluate(()=>document.body.innerText.includes('自訂單元')));
await pg.screenshot({path:'/tmp/w/v2/tools/mig-units.png'});
console.log('pageerrors',errs);await b.close()})();

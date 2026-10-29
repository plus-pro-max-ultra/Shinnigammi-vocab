// node tools/mig-test2.js <url> — v14.42: exact device mixed state after v14.41 ran:
// books [debook-13(26w), debook-L3, debook-L1, debook-L2] + custom book; progress kept.
const p=require('puppeteer-core');const fs=require('fs');const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{const u=process.argv[2];const words=JSON.parse(fs.readFileSync('src/words.json','utf8'));
const de=words.filter(x=>x.lang==='de'&&x.themeId);
// the 26 L2 "andere wichtige Wörter und Wendungen" words that lived in debook-13
// (merged topic words with themeId debook-L2 that are NOT foundations)
const merged=words.filter(x=>x.lang==='de'&&x.themeId==='debook-L2'&&!x.foundations).slice(0,26);
const entries={};
de.forEach(x=>{entries[x.id]={books:[x.themeId]}});
merged.forEach(x=>{entries[x.id]={books:["debook-L2","debook-13"],familiarity:2}});
entries['ude-900001']={books:["debook-13"],familiarity:1}; // user word stuck in legacy unit
const seed={books:[{id:"debook-13",name:"2 · andere wichtige Wörter und Wendungen"},{id:"debook-L3",name:"Lektion 3"},{id:"debook-L1",name:"Lektion 1"},{id:"debook-L2",name:"Lektion 2"},{id:"debook-uabc",name:"我的自訂"}],entries};
const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});
const pg=await b.newPage();await pg.setViewport({width:390,height:844,isMobile:true,hasTouch:true});
let errs=0;pg.on('pageerror',x=>{errs++;console.log('ERR',x.message)});
const ok=(n,c)=>console.log(c?'PASS':'FAIL',n);
await pg.goto(u+'#/');await pg.evaluate(()=>localStorage.clear());
await pg.evaluate(s=>{localStorage.setItem('mmv:vocabulary.catalog.v1',JSON.stringify(s.cat));
localStorage.setItem('mmv:vocabulary.progress.0.v1',JSON.stringify(s.prog))},{cat:seed,prog:{"de-101":{ok:5,bad:1}}});
await pg.goto(u+'#/');await pg.reload();await sleep(1200);
const cat=await pg.evaluate(()=>JSON.parse(localStorage.getItem('mmv:vocabulary.catalog.v1')));
const ids=cat.books.map(x=>x.id);
ok('debook-13 removed',!ids.includes('debook-13'));
ok('no numeric legacy books',!ids.some(x=>/^debook-\d+$/.test(x)));
ok('custom book preserved',ids.includes('debook-uabc'));
ok('Lektion order canonical',JSON.stringify(ids.filter(x=>/^debook-L/.test(x)))===JSON.stringify(["debook-L1","debook-L2","debook-L3"]));
const e0=cat.entries[merged[0].id]||{};
ok('merged word only in debook-L2',(e0.books||[]).join()==='debook-L2');
ok('familiarity preserved',e0.familiarity===2);
const eu=cat.entries['ude-900001']||{};
ok('user word legacy stripped, kept, familiarity kept',eu&&(eu.books||[]).length===0&&eu.familiarity===1);
const bad=words.filter(x=>x.lang==='de'&&x.themeId&&!(cat.entries[x.id]?.books||[]).includes(x.themeId));
ok('all de themeId words in Lektion book ('+bad.length+' bad)',bad.length===0);
const prog=await pg.evaluate(()=>JSON.parse(localStorage.getItem('mmv:vocabulary.progress.0.v1')));
ok('progress untouched',prog['de-101']&&prog['de-101'].ok===5&&prog['de-101'].bad===1);
// UI: units page order + counts
await pg.evaluate(()=>{const x=[...document.querySelectorAll('.lang-switch')];x.length&&x[0].click()});await sleep(500);
await pg.goto(u+'#/');await pg.reload();await sleep(900);
await pg.evaluate(()=>{const x=[...document.querySelectorAll('.course-card')].find(x=>x.innerText.includes('German A1')||x.innerText.includes('德文'));x&&x.click()});await sleep(500);
const ui=await pg.evaluate(()=>{const ul=document.querySelector('.unit-list');return ul?ul.innerText:'NO-UNITLIST'});
const i1=ui.indexOf('Lektion 1'),i2=ui.indexOf('Lektion 2'),i3=ui.indexOf('Lektion 3');
ok('UI Lektion order 1<2<3',i1>=0&&i1<i2&&i2<i3);
ok('UI no legacy topic unit',!/andere wichtige/.test(ui));
ok('UI counts 69/119/110',/Lektion 1[\s\S]{0,80}69 字/.test(ui)&&/Lektion 2[\s\S]{0,80}119 字/.test(ui)&&/Lektion 3[\s\S]{0,80}110 字/.test(ui));
await pg.screenshot({path:'tools/mig2-units.png'});
console.log('pageerrors',errs);await b.close()})();

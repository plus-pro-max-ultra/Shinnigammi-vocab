const p=require('puppeteer-core');const sleep=ms=>new Promise(r=>setTimeout(r,ms));
let pg;const res=[];const rec=(n,ok,note)=>{res.push([n,ok]);console.log(ok?'PASS':'FAIL',n,note||'');};
async function openBackup(){
  await pg.goto('http://localhost:8571/#/more');await sleep(700);
  const clicked=await pg.evaluate(()=>{const b=[...document.querySelectorAll('button,a')].find(x=>x.innerText.includes('備份'));if(b){b.click();return true}return false});
  await sleep(600);return clicked;
}
async function setTextarea(v){return pg.evaluate((v)=>{const t=document.querySelector('textarea');if(!t)return false;const s=Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,'value').set;s.call(t,v);t.dispatchEvent(new Event('input',{bubbles:true}));return true;},v);}
(async()=>{const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});
pg=await b.newPage();await pg.setViewport({width:390,height:844,isMobile:true,hasTouch:true});
pg.on('pageerror',x=>console.log('ERR',x.message));
await pg.goto('http://localhost:8571/#/more');await pg.evaluate(()=>localStorage.clear());
await pg.evaluate(()=>{const k='mmv:vocabulary.ui.v1';const v=JSON.parse(localStorage[k]||'{}');v.mastery=true;v.size=24;localStorage[k]=JSON.stringify(v);});
await pg.reload();await sleep(900);
rec('backup screen opens',await openBackup());
rec('generate backup',await pg.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.includes('產生備份'));if(b){b.click();return true}return false}));
await sleep(500);
const dump=await pg.evaluate(()=>document.querySelector('textarea')?.value||'');
let parsed=null;try{parsed=JSON.parse(dump);}catch{}
rec('backup JSON valid with ui.mastery=true',!!parsed&&parsed.ui&&parsed.ui.mastery===true&&parsed.ui.size===24, parsed&&('keys:'+Object.keys(parsed)));
// wipe + restore
await pg.evaluate(()=>localStorage.clear());await pg.reload();await sleep(900);
rec('reopen backup screen',await openBackup());
rec('paste backup',await setTextarea(dump));
await sleep(1500);
const dis=await pg.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.includes('還原資料'));return b?b.disabled:'nobtn'});
console.log('restore btn disabled:',dis);
await pg.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.includes('還原資料'));b&&b.click();});await sleep(1000);
const restored=await pg.evaluate(()=>{const keys=Object.keys(localStorage);const raw=localStorage['mmv:vocabulary.ui.v1'];let v={};try{v=raw?JSON.parse(raw):{};}catch(e){return {keys,rawval:String(raw&&raw.slice?raw.slice(0,40):raw)}}return {keys,raw:!!raw,mastery:v.mastery,size:v.size,restored:document.body.innerText.includes('已還原'),invalid:document.body.innerText.includes('備份無效')};});
rec('roundtrip restores ui settings',restored.mastery===true&&restored.size===24&&restored.restored===true,JSON.stringify(restored));
// old backup without ui
const old=JSON.parse(dump);delete old.ui;
await pg.evaluate(()=>localStorage.clear());await pg.reload();await sleep(900);
await openBackup();await setTextarea(JSON.stringify(old));
await pg.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.includes('還原資料'));b&&b.click();});await sleep(800);
await sleep(1200);
const oldRes=await pg.evaluate(()=>{const raw=localStorage['mmv:vocabulary.ui.v1'];return {ok:document.body.innerText.includes('已還原'),mastery:raw?JSON.parse(raw).mastery:'absent'};});
rec('old backup (no ui) restores fine, mastery default',oldRes.ok&&(oldRes.mastery==='absent'||oldRes.mastery===false||oldRes.mastery===undefined),JSON.stringify(oldRes));
// malformed ui
const bad=JSON.parse(dump);bad.ui=[1];
await openBackup();await setTextarea(JSON.stringify(bad));
await pg.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.includes('還原資料'));b&&b.click();});await sleep(800);
rec('malformed ui rejected',await pg.evaluate(()=>document.body.innerText.includes('備份無效')));
console.log('SUMMARY '+JSON.stringify(res));
await b.close();})().catch(e=>{console.error(e);process.exit(1)});

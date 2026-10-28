const p=require('puppeteer-core');const fs=require('fs');const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const bank=JSON.parse(fs.readFileSync('src/words.json','utf8'));
let pg,errs=0;const results=[];
function rec(n,ok,note){results.push([n,ok]);console.log(ok?'PASS':'FAIL',n,note||'');}
async function ensureSetup(){
  // leave any active quiz session, land on quiz setup
  await pg.goto('http://localhost:8571/#/');await sleep(400);
  await pg.goto('http://localhost:8571/#/quiz');await sleep(700);
  const hasStart=await pg.evaluate(()=>[...document.querySelectorAll('button')].some(x=>x.innerText.trim()==='開始'));
  if(!hasStart){await pg.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.includes('結束'));b&&b.click();});await sleep(500);
    await pg.goto('http://localhost:8571/#/quiz');await sleep(600);}
}
async function gotoQuiz(mode){
  await ensureSetup();
  await pg.evaluate((m)=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.includes(m));b&&b.click();},mode);await sleep(300);
  await pg.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='開始');b&&b.click();});await sleep(800);
}
const optButtons=()=>pg.evaluate(()=>[...document.querySelectorAll('.quiz-options button')].map((b,i)=>({i,t:b.innerText.trim(),skip:b.classList.contains('idk-btn')||b.classList.contains('meaning-hidden')})));
async function clickOpt(idx){await pg.evaluate((i)=>{[...document.querySelectorAll('.quiz-options button')].filter(b=>!b.classList.contains('idk-btn')&&!b.classList.contains('meaning-hidden'))[i].click();},idx);}
async function markAt(idx){return pg.evaluate((i)=>{const b=[...document.querySelectorAll('.quiz-options button')].filter(x=>!x.classList.contains('idk-btn')&&!x.classList.contains('meaning-hidden'))[i];return b&&b.classList.contains('correct-option');},idx);}
async function answerMCCorrect(reverse){
  const prompt=await pg.evaluate(()=>document.querySelector('.quiz-prompt h1')?.innerText.trim());
  const opts=(await optButtons()).filter(o=>!o.skip).map(o=>o.t);
  let pick=-1;
  if(!reverse){const e=bank.find(w=>w.word===prompt||prompt===(e=>(e&&e.word+'　'+(e.reading||'')))(bank.find(w=>w.word===prompt)));const en=bank.find(w=>w.word===prompt||prompt.startsWith(w.word+'　'));if(en)pick=opts.findIndex(o=>o===en.zh||o.startsWith(en.zh));}
  else{for(let i=0;i<opts.length;i++){const word=opts[i].split('　')[0].split(' ')[0];const e=bank.find(w=>w.word===word);if(e&&(e.zh===prompt||(e.zh&&prompt.startsWith(e.zh.split(/[;；]/)[0])))){pick=i;break;}}}
  if(pick<0)return{ok:false,prompt,opts};
  await clickOpt(pick);await sleep(250);
  return{ok:await markAt(pick),prompt,opts};
}
async function qnum(){return pg.evaluate(()=>document.querySelector('.hdr-title strong')?.innerText||'');}
(async()=>{const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});
pg=await b.newPage();await pg.setViewport({width:390,height:844,isMobile:true,hasTouch:true});
pg.on('pageerror',x=>{errs++;console.log('ERR',x.message)});
await pg.goto('http://localhost:8571/#/more');await pg.evaluate(()=>localStorage.clear());
// default-off regression
await gotoQuiz('日 → 中');let r=await answerMCCorrect(false);await sleep(1300);
rec('default OFF: correct MC stays manual',r.ok&&await pg.evaluate(()=>!!document.querySelector('.correct-option')),'pick:'+r.prompt);
// enable via UI
await pg.goto('http://localhost:8571/#/more');await sleep(700);
await pg.evaluate(()=>{const b=[...document.querySelectorAll('button,a')].find(x=>x.innerText.includes('設定'));b&&b.click();});await sleep(700);
rec('toggle in settings',await pg.evaluate(()=>{const l=[...document.querySelectorAll('label.check-row')].find(x=>x.textContent.includes('精熟複習模式'));if(!l)return false;l.querySelector('input').click();return true}));
rec('persisted',await pg.evaluate(()=>JSON.parse(localStorage['mmv:vocabulary.ui.v1']||'{}').mastery===true));
// forward MC
await gotoQuiz('日 → 中');r=await answerMCCorrect(false);
await sleep(400);const vis=await pg.evaluate(()=>!!document.querySelector('.correct-option'));
await sleep(650);const adv=await pg.evaluate(()=>!document.querySelector('.correct-option'));
rec('forward MC: mark shows then auto-advance',r.ok&&vis&&adv,'pick:'+r.prompt);
rec('no auto info card',await pg.evaluate(()=>!document.querySelector('.sheet-backdrop')));
// reverse MC
await gotoQuiz('中 → 日');r=await answerMCCorrect(true);
await sleep(1100);
rec('reverse MC: correct auto-advances',r.ok&&await pg.evaluate(()=>!document.querySelector('.correct-option')),'pick:'+r.prompt+' opts:'+JSON.stringify(r.opts));
// kana
await gotoQuiz('假名');
{const prompt=await pg.evaluate(()=>document.querySelector('.quiz-prompt h1')?.innerText.trim());
 const opts=(await optButtons()).filter(o=>!o.skip).map(o=>o.t);
 const e=bank.find(w=>w.lang==='jp'&&(w.word===prompt||prompt.startsWith(w.word+'　'))&&w.reading&&w.reading!==w.word);
 let ok=false,note='';
 if(e){const i=opts.findIndex(o=>o===e.reading||o.startsWith(e.reading));if(i>=0){await clickOpt(i);await sleep(250);ok=await markAt(i);await sleep(1100);ok=ok&&await pg.evaluate(()=>!document.querySelector('.correct-option'));}else note='reading not in opts '+JSON.stringify(opts);}
 else note='bank miss '+prompt;
 rec('kana: correct auto-advances',ok,note);}
// tiles
await gotoQuiz('字塊拼字');
{const meaning=await pg.evaluate(()=>document.querySelector('.quiz-prompt h1')?.innerText.trim());
 const ent=bank.find(w=>w.lang==='jp'&&(w.zh===meaning||(w.zh&&meaning&&meaning.startsWith(w.zh.replace(/（.*?）/g,'')))||(w.zh&&w.zh.startsWith(meaning))));
 let okp=false,okf=false,note='';
 if(ent){const reading=ent.reading;
   const have=await pg.evaluate(()=>[...document.querySelectorAll('.tile-grid button:not(.tile-idk):not(.tile-back)')].map(x=>x.textContent));
   if(have.length===0){note='no tile grid (quiz not started)';}
   else{
     await pg.evaluate(()=>{document.querySelectorAll('.tile-grid button:not(.tile-idk):not(.tile-back)')[0].click();});
     await sleep(1000);
     okp=await pg.evaluate(()=>!document.querySelector('.quiz-feedback')&&!document.querySelector('.next-btn'));
     await pg.evaluate(()=>{const b=document.querySelector('.tile-back');b&&b.click();});await sleep(150);
     for(const ch of reading){await pg.evaluate((c)=>{const t=[...document.querySelectorAll('.tile-grid button:not(.tile-idk):not(.tile-back)')].find(x=>x.textContent===c);t&&t.click();},ch);await sleep(70);}
     await sleep(400);
     const marked=await pg.evaluate(()=>!!document.querySelector('.next-btn'));
     await sleep(1100);
     okf=marked&&await pg.evaluate(()=>!document.querySelector('.next-btn'));
     note=ent.word+'/'+reading;}
 } else note='bank miss '+meaning;
 rec('tiles: partial does NOT advance or check',okp,note);
 rec('tiles: full correct auto-advances',okf,note);}
// spell correct
await gotoQuiz('打字拼字');
{const meaning=await pg.evaluate(()=>document.querySelector('.quiz-prompt h1')?.innerText.trim());
 const ent=bank.find(w=>w.lang==='jp'&&(w.zh===meaning||(w.zh&&meaning&&meaning.startsWith(w.zh.replace(/（.*?）/g,'')))))||bank.find(w=>w.zh===meaning);
 let ok=false,note='';
 if(ent){const ans=ent.lang==='jp'&&/[一-鿿々]/.test(ent.word)?ent.reading:ent.word;
   await pg.evaluate((a)=>{const i=document.querySelector('.spell-input');const s=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set;s.call(i,a);i.dispatchEvent(new Event('input',{bubbles:true}));},ans);
   await sleep(200);
   await pg.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='送出');b&&b.click();});
   await sleep(300);const marked=await pg.evaluate(()=>!!document.querySelector('.sp-ok'));
   await sleep(1000);ok=marked&&await pg.evaluate(()=>!document.querySelector('.sp-ok'));
   note='ans '+ans;}else note='bank miss '+meaning;
 rec('spell: correct auto-advances (750ms preserved)',ok,note);}
// spell wrong manual
await gotoQuiz('打字拼字');
{await pg.evaluate(()=>{const i=document.querySelector('.spell-input');const s=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set;s.call(i,'xxxx');i.dispatchEvent(new Event('input',{bubbles:true}));});await sleep(150);
 await pg.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='送出');b&&b.click();});await sleep(1300);
 rec('spell: wrong stays manual',await pg.evaluate(()=>!!document.querySelector('.sp-bad')));}
// tiles manual-next race
await gotoQuiz('字塊拼字');
{const before=await qnum();
 const meaning=await pg.evaluate(()=>document.querySelector('.quiz-prompt h1')?.innerText.trim());
 const ent=bank.find(w=>w.lang==='jp'&&(w.zh===meaning||(w.zh&&meaning&&meaning.startsWith(w.zh.replace(/（.*?）/g,'')))));
 let ok=false,note='';
 if(ent){for(const ch of ent.reading){await pg.evaluate((c)=>{const t=[...document.querySelectorAll('.tile-grid button:not(.tile-idk):not(.tile-back)')].find(x=>x.textContent===c);t&&t.click();},ch);await sleep(50);}
   await pg.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.includes('下一題'));b&&b.click();});
   await sleep(1200);const after=await qnum();ok=parseInt(after)===parseInt(before)+1;note=before+'->'+after;}
 rec('race: manual next in 700ms window advances once',ok,note);}
// exit race
await gotoQuiz('日 → 中');r=await answerMCCorrect(false);
await pg.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.includes('結束'));b&&b.click();});
await sleep(1200);
rec('race: exit during window leaves quiz cleanly',r.ok&&await pg.evaluate(()=>[...document.querySelectorAll('button')].some(x=>x.innerText.trim()==='開始')));
// session end exactly once (mastery still on)
await gotoQuiz('日 → 中');
let steps=0,landed=false;
for(let i=0;i<12;i++){if(await pg.evaluate(()=>!!document.querySelector('.result-card'))){landed=true;break;}
  const a=await answerMCCorrect(false);if(!a.ok){console.log('session pick fail at',i,a.prompt);break;}steps++;await sleep(1100);}
rec('session end: result exactly once after 10 correct',landed&&steps===10,'steps='+steps);
console.log('pageerrors',errs);
console.log('SUMMARY '+JSON.stringify(results));
await b.close();})().catch(e=>{console.error(e);process.exit(1)});

const p=require('puppeteer-core');const fs=require('fs');const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const bank=JSON.parse(fs.readFileSync('src/words.json','utf8'));
let pg;const res=[];
const rec=(n,ok,note)=>{res.push([n,ok]);console.log(ok?'PASS':'FAIL',n,note||'');};
async function ensureSetup(){await pg.goto('http://localhost:8571/#/');await sleep(400);await pg.goto('http://localhost:8571/#/quiz');await sleep(700);
  const has=await pg.evaluate(()=>[...document.querySelectorAll('button')].some(x=>x.innerText.trim()==='開始'));
  if(!has){await pg.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.includes('結束'));b&&b.click();});await sleep(400);
    await pg.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.includes('確認結束')||x.innerText.trim()==='結束測驗');b&&b.click();}).catch(()=>{});await sleep(400);
    await pg.goto('http://localhost:8571/#/quiz');await sleep(600);}}
async function gotoQuiz(mode){await ensureSetup();
  await pg.evaluate((m)=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.includes(m));b&&b.click();},mode);await sleep(300);
  await pg.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='開始');b&&b.click();});await sleep(800);}
async function answerMCCorrect(){
  const prompt=await pg.evaluate(()=>document.querySelector('.quiz-prompt h1')?.innerText.trim());
  const opts=await pg.evaluate(()=>[...document.querySelectorAll('.quiz-options button')].filter(b=>!b.classList.contains('idk-btn')&&!b.classList.contains('meaning-hidden')).map(b=>b.innerText.trim()));
  const e=bank.find(w=>w.word===prompt||prompt.startsWith(w.word+'　'));
  const i=e?opts.findIndex(o=>o===e.zh||o.startsWith(e.zh)):-1;
  if(i<0)return{ok:false,prompt};
  await pg.evaluate((i)=>{[...document.querySelectorAll('.quiz-options button')].filter(b=>!b.classList.contains('idk-btn')&&!b.classList.contains('meaning-hidden'))[i].click();},i);
  await sleep(200);
  return{ok:true,prompt};
}
(async()=>{const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});
pg=await b.newPage();await pg.setViewport({width:390,height:844,isMobile:true,hasTouch:true});
pg.on('pageerror',x=>console.log('ERR',x.message));
await pg.goto('http://localhost:8571/#/more');await pg.evaluate(()=>localStorage.clear());
await pg.evaluate(()=>{const k='mmv:vocabulary.ui.v1';const v=JSON.parse(localStorage[k]||'{}');v.mastery=true;localStorage[k]=JSON.stringify(v);});
await pg.reload();await sleep(900);
// exit race
await gotoQuiz('日 → 中');
const q1=await pg.evaluate(()=>document.querySelector('.hdr-title strong')?.innerText);
let r=await answerMCCorrect();
await pg.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='結束');b&&b.click();});
await sleep(250);
const confirmShown=await pg.evaluate(()=>[...document.querySelectorAll('button')].some(x=>x.innerText.includes('繼續作答')));
await sleep(1200);
const q2=await pg.evaluate(()=>document.querySelector('.hdr-title strong')?.innerText);
rec('exit race: confirm shows and question NOT advanced',r.ok&&confirmShown&&q1===q2,q1+'->'+q2);
// cancel exit, still on same answered question, then manual advance works
await pg.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.includes('繼續作答'));b&&b.click();});
await sleep(400);
const stillAnswered=await pg.evaluate(()=>!!document.querySelector('.correct-option'));
rec('cancel exit: same answered question retained',stillAnswered);
// spell correct re-verify
await gotoQuiz('打字拼字');
{const meaning=await pg.evaluate(()=>document.querySelector('.quiz-prompt h1')?.innerText.trim());
 const ent=bank.find(w=>w.lang==='jp'&&(w.zh===meaning||(w.zh&&meaning&&meaning.startsWith(w.zh.replace(/（.*?）/g,'')))))||bank.find(w=>w.zh===meaning);
 let ok=false,note='';
 if(ent){const ans=ent.lang==='jp'&&/[一-鿿々]/.test(ent.word)?ent.reading:ent.word;
   await pg.evaluate((a)=>{const i=document.querySelector('.spell-input');const s=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set;s.call(i,a);i.dispatchEvent(new Event('input',{bubbles:true}));},ans);
   await sleep(200);
   await pg.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='送出');b&&b.click();});
   await sleep(300);const marked=await pg.evaluate(()=>!!document.querySelector('.sp-ok'));
   await sleep(1000);ok=marked&&await pg.evaluate(()=>!document.querySelector('.sp-ok'));note='ans '+ans+' '+ent.id;}
 else note='bank miss '+meaning;
 rec('spell: correct auto-advances (750ms preserved)',ok,note);}
console.log('SUMMARY '+JSON.stringify(res));
await b.close();})().catch(e=>{console.error(e);process.exit(1)});

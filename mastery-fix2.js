const p=require('puppeteer-core');const fs=require('fs');const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const bank=JSON.parse(fs.readFileSync('src/words.json','utf8'));
let pg;
async function ensureSetup(){await pg.goto('http://localhost:8571/#/');await sleep(400);await pg.goto('http://localhost:8571/#/quiz');await sleep(700);
  const has=await pg.evaluate(()=>[...document.querySelectorAll('button')].some(x=>x.innerText.trim()==='開始'));
  if(!has){await pg.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.includes('結束'));b&&b.click();});await sleep(500);await pg.goto('http://localhost:8571/#/quiz');await sleep(600);}}
async function gotoQuiz(mode){await ensureSetup();
  await pg.evaluate((m)=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.includes(m));b&&b.click();},mode);await sleep(300);
  await pg.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='開始');b&&b.click();});await sleep(800);}
(async()=>{const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});
pg=await b.newPage();await pg.setViewport({width:390,height:844,isMobile:true,hasTouch:true});
pg.on('pageerror',x=>console.log('ERR',x.message));
await pg.goto('http://localhost:8571/#/more');await pg.evaluate(()=>localStorage.clear());
// enable mastery directly in storage then reload
await pg.evaluate(()=>{const k='mmv:vocabulary.ui.v1';const v=JSON.parse(localStorage[k]||'{}');v.mastery=true;localStorage[k]=JSON.stringify(v);});
await pg.reload();await sleep(900);
// SPELL diag
await gotoQuiz('打字拼字');
{const meaning=await pg.evaluate(()=>document.querySelector('.quiz-prompt h1')?.innerText.trim());
 const ent=bank.find(w=>w.lang==='jp'&&(w.zh===meaning||(w.zh&&meaning&&meaning.startsWith(w.zh.replace(/（.*?）/g,'')))))||bank.find(w=>w.zh===meaning);
 const ans=ent?(ent.lang==='jp'&&/[一-鿿々]/.test(ent.word)?ent.reading:ent.word):'?';
 console.log('SPELL prompt:',JSON.stringify(meaning),'picked entry:',ent&&ent.id,ent&&ent.word,'ans:',ans);
 await pg.evaluate((a)=>{const i=document.querySelector('.spell-input');const s=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set;s.call(i,a);i.dispatchEvent(new Event('input',{bubbles:true}));},ans);
 await sleep(200);
 await pg.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='送出');b&&b.click();});
 await sleep(300);
 console.log('SPELL post-submit:',await pg.evaluate(()=>JSON.stringify({spok:!!document.querySelector('.sp-ok'),spbad:!!document.querySelector('.sp-bad'),fb:document.querySelector('.quiz-feedback')?.innerText.slice(0,80)})));
 await sleep(1000);
 console.log('SPELL after 1.3s: spok gone =',await pg.evaluate(()=>!document.querySelector('.sp-ok')));}
// EXIT race diag
await gotoQuiz('日 → 中');
{const prompt=await pg.evaluate(()=>document.querySelector('.quiz-prompt h1')?.innerText.trim());
 const opts=await pg.evaluate(()=>[...document.querySelectorAll('.quiz-options button')].filter(b=>!b.classList.contains('idk-btn')&&!b.classList.contains('meaning-hidden')).map(b=>b.innerText.trim()));
 const e=bank.find(w=>w.word===prompt||prompt.startsWith(w.word+'　'));
 const i=e?opts.findIndex(o=>o===e.zh||o.startsWith(e.zh)):-1;
 console.log('EXIT prompt:',prompt,'entry:',e&&e.id,'pickIdx:',i);
 await pg.evaluate((i)=>{[...document.querySelectorAll('.quiz-options button')].filter(b=>!b.classList.contains('idk-btn')&&!b.classList.contains('meaning-hidden'))[i].click();},i);
 await sleep(200);
 console.log('marked:',await pg.evaluate((i)=>{const b=[...document.querySelectorAll('.quiz-options button')].filter(x=>!x.classList.contains('idk-btn')&&!x.classList.contains('meaning-hidden'))[i];return b&&b.classList.contains('correct-option');},i));
 const clicked=await pg.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.includes('結束'));if(b){b.click();return true}return false});
 console.log('exit clicked:',clicked);
 await sleep(1200);
 console.log('after exit:',await pg.evaluate(()=>JSON.stringify({start:[...document.querySelectorAll('button')].some(x=>x.innerText.trim()==='開始'),txt:document.body.innerText.slice(0,60)})));}
await b.close();})().catch(e=>{console.error(e);process.exit(1)});

const p=require('puppeteer-core');const fs=require('fs');const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const bank=JSON.parse(fs.readFileSync('src/words.json','utf8'));
const byWord={}; for(const w of bank){ byWord[w.word]=w; }
(async()=>{const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});
const pg=await b.newPage();await pg.setViewport({width:390,height:844,isMobile:true,hasTouch:true});
let errs=0;pg.on('pageerror',x=>{errs++;console.log('ERR',x.message)});
await pg.goto('http://localhost:8571/#/more');await pg.evaluate(()=>localStorage.clear());
await pg.goto('http://localhost:8571/#/more');await sleep(800);
await pg.evaluate(()=>{const b=[...document.querySelectorAll('button,a')].find(x=>x.innerText.includes('設定'));b&&b.click();});await sleep(700);
await pg.evaluate(()=>{const l=[...document.querySelectorAll('label.check-row')].find(x=>x.textContent.includes('精熟複習模式'));l.querySelector('input').click();});
await pg.goto('http://localhost:8571/#/quiz');await sleep(700);
await pg.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.includes('日 → 中'));b&&b.click();});await sleep(300);
await pg.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='開始');b&&b.click();});await sleep(800);
// read prompt word and options, click the correct meaning from the bank
const info=await pg.evaluate(()=>({word:document.querySelector('.quiz-prompt h1')?.innerText.trim(),
  opts:[...document.querySelectorAll('.quiz-options button')].map(b=>b.innerText.trim())}));
const entry=byWord[info.word];
console.log('prompt:',info.word,'opts:',JSON.stringify(info.opts));
if(!entry){console.log('bank miss');process.exit(1);}
const correctText=entry.zh;
const idx=info.opts.findIndex(o=>o.includes(correctText)||correctText.includes(o.replace(/^./,'')));
const pick=idx>=0?idx:info.opts.findIndex(o=>o===correctText);
console.log('clicking option',pick,info.opts[pick],'expected',correctText);
await pg.evaluate((i)=>{document.querySelectorAll('.quiz-options button')[i].click();},pick);
await sleep(250);
console.log('marked correct:',await pg.evaluate((i)=>document.querySelectorAll('.quiz-options button')[i].classList.contains('correct-option'),pick));
await sleep(400);console.log('answered state visible at +400ms:',await pg.evaluate(()=>!!document.querySelector('.correct-option')));
await sleep(600);console.log('auto-advanced by ~1.0s:',await pg.evaluate(()=>!document.querySelector('.correct-option')));
console.log('pageerrors',errs);await b.close();})().catch(e=>{console.error(e);process.exit(1)});

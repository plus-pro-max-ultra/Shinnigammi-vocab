// node tools/tiles-test.js <url> — v14.43 tiles: spaced/punct answers completable, fixed chars shown, no blank tiles
const p=require('puppeteer-core');const fs=require('fs');const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{const u=process.argv[2];const words=JSON.parse(fs.readFileSync('src/words.json','utf8'));
const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});
const pg=await b.newPage();await pg.setViewport({width:390,height:844,isMobile:true,hasTouch:true});
let errs=0;pg.on('pageerror',x=>{errs++;console.log('ERR',x.message)});
const ok=(n,c)=>console.log(c?'PASS':'FAIL',n);
await pg.goto(u+'#/');await pg.evaluate(()=>localStorage.clear());await pg.reload();await sleep(900);
const isDe=await pg.evaluate(()=>document.body.innerText.includes('German A1'));
if(!isDe){await pg.evaluate(()=>{const x=[...document.querySelectorAll('.lang-switch')];x.length&&x[0].click()});await sleep(500)}
await pg.goto(u+'#/quiz');await pg.reload();await sleep(1000);
await pg.evaluate(()=>{const x=[...document.querySelectorAll('.mode-tiles button')].find(x=>x.innerText.includes('字塊拼字'));x.click()});await sleep(400);
await pg.evaluate(()=>{const x=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='開始');x.click()});await sleep(700);
let spaced=0,punct=0;
for(let qi=0;qi<12;qi++){
  const pr=await pg.evaluate(()=>document.querySelector('.quiz-prompt h1')?.innerText.trim()||'');
  const cand=words.filter(w=>w.lang==='de'&&(w.en===pr||w.word===pr));
  const tiles=await pg.evaluate(()=>[...document.querySelectorAll('.tile-grid button')].map(x=>x.innerText));
  ok('Q'+(qi+1)+' no blank tiles',tiles.filter(t=>!t||!t.trim()).length===0);
  if(cand.length!==1){console.log('skip unresolved prompt',pr);break}
  const w=cand[0];
  if(w.word.includes(' '))spaced++;
  if(/[.!?]/.test(w.word))punct++;
  // tap all non-stripped chars of the answer in order (repeat tiles as needed)
  for(const c of [...w.word].filter(c=>!/[。!?. \s]/.test(c))){
    await pg.evaluate(c=>{const ts=[...document.querySelectorAll('.tile-grid button')];
      const i=ts.findIndex(x=>x.innerText===c);if(i>=0)ts[i].click()},c);await sleep(40)}
  await sleep(250);
  const judged=await pg.evaluate(()=>({ok:!!document.querySelector('.tile-answer.sp-ok'),bad:!!document.querySelector('.tile-answer.sp-bad')}));
  ok('Q'+(qi+1)+' "'+w.word+'" completable+correct',judged.ok&&!judged.bad);
  if(w.word.includes(' ')||/[.!?]/.test(w.word)){
    const row=await pg.evaluate(()=>document.querySelector('.tile-answer')?.innerText||'');
    ok('Q'+(qi+1)+' fixed chars shown in answer row',/[.!?]/.test(row)||row.includes('\u00a0')||row.includes(' '));
    await pg.screenshot({path:'tools/tiles-fix-'+(w.word.includes(' ')?'space':'punct')+'.png'})}
  await pg.evaluate(()=>{const x=[...document.querySelectorAll('button.next-btn')];x.length&&x[0].click()});await sleep(400);
  if(qi>=5&&spaced>=1&&punct>=1)break}
ok('saw spaced answer',spaced>=1);
console.log('spaced:',spaced,'punct:',punct,'pageerrors:',errs);await b.close()})();

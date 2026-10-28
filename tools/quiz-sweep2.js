// node tools/quiz-sweep2.js <url> — every quiz type both langs: correct+wrong judgment, pixels
const p=require('puppeteer-core');const fs=require('fs');const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{const u=process.argv[2];const words=JSON.parse(fs.readFileSync('src/words.json','utf8'));
const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});
const pg=await b.newPage();await pg.setViewport({width:390,height:844,isMobile:true,hasTouch:true});
let errs=0;pg.on('pageerror',x=>{errs++;console.log('ERR',x.message)});
const ok=(n,c)=>console.log(c?'PASS':'FAIL',n);
const shot=n=>pg.screenshot({path:'tools/sw2-'+n+'.png'});
const fresh=async()=>{await pg.goto(u+'#/quiz');await pg.reload();await sleep(1000)};
async function setLang(lang){
  const isDe=await pg.evaluate(()=>document.body.innerText.includes('German A1'));
  if((lang==='de')!==isDe){await pg.evaluate(()=>{const x=[...document.querySelectorAll('.lang-switch')];x.length&&x[0].click()});await sleep(500)}}
async function start(name){
  await fresh();
  const f=await pg.evaluate(n=>{const x=[...document.querySelectorAll('.mode-tiles button')].find(x=>x.innerText.includes(n));if(x){x.click();return true}return false},name);
  if(!f){console.log('NO MODE',name);return false}
  await sleep(400);
  await pg.evaluate(()=>{const x=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='開始');x&&x.click()});await sleep(700);return true}
const prompt=()=>pg.evaluate(()=>document.querySelector('.quiz-prompt h1')?.innerText.trim()||'');
const optTexts=()=>pg.evaluate(()=>[...document.querySelectorAll('.quiz-options button')].map(x=>x.innerText.trim()));
async function clickOpt(t){return pg.evaluate(t=>{const x=[...document.querySelectorAll('.quiz-options button')].find(x=>x.innerText.trim()===t);if(x){x.click();return true}return false},t)}
const judgedOk=()=>pg.evaluate(()=>!!document.querySelector('.quiz-options .correct-option'));
const next=async()=>{await pg.evaluate(()=>{const x=[...document.querySelectorAll('button.next-btn')];x.length&&x[0].click()});await sleep(500)};

await pg.goto(u+'#/');await pg.evaluate(()=>localStorage.clear());await pg.reload();await sleep(900);
// ===== DE forward =====
await setLang('de');
await start('DE → EN');
let pr=await prompt(),opts=await optTexts();
let w=words.filter(x=>x.lang==='de'&&x.word===pr)[0];
if(!w){console.log('DE fwd: prompt unresolvable',pr)}else{
  ok('de fwd 4 options+idk',opts.length===5);
  await clickOpt(w.en);await sleep(300);
  ok('de fwd correct judged',await judgedOk());await shot('de-fwd');
  await next();pr=await prompt();opts=await optTexts();
  w=words.filter(x=>x.lang==='de'&&x.word===pr)[0];
  const wrong=opts.find(o=>o!==w.en&&o!=='不會');
  await clickOpt(wrong);await sleep(300);
  const st=await pg.evaluate(()=>({ok:!!document.querySelector('.quiz-options .correct-option'),bad:!!document.querySelector('.quiz-options .wrong-option')}));
  ok('de fwd wrong shows correct+wrong marks',st.ok&&st.bad);await shot('de-fwd-wrong')}
// ===== DE reverse =====
await start('EN → DE');
pr=await prompt();opts=await optTexts();
w=words.filter(x=>x.lang==='de'&&x.en===pr)[0];
if(!w)console.log('DE rev: prompt unresolvable',pr);
else{await clickOpt(w.word);await sleep(300);ok('de rev correct judged',await judgedOk());await shot('de-rev')}
// ===== DE spell =====
await start('打字拼字');
pr=await prompt();
w=words.filter(x=>x.lang==='de'&&(x.en===pr||x.word===pr))[0];
if(!w)console.log('DE spell: prompt unresolvable',pr);
else{
  await pg.type('.spell-input, input[type="text"], input',w.word).catch(e=>console.log('type err'));
  await pg.evaluate(()=>{const x=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='送出');x&&x.click()});await sleep(300);
  const sp=await pg.evaluate(()=>({ok:!!document.querySelector('.sp-ok'),body:document.body.innerText.slice(0,200)}));
  ok('de spell exact correct',sp.ok);await shot('de-spell')}
// ===== DE cards =====
await start('字卡');
await sleep(400);await shot('de-cards');
const cardBtns=await pg.evaluate(()=>[...document.querySelectorAll('button')].map(x=>x.innerText.trim()).filter(t=>['認識','不認識'].includes(t)));
ok('de cards self-grade buttons',cardBtns.length===2);
// ===== DE familiar =====
await start('熟悉度');
await sleep(400);await shot('de-familiar');
console.log('pageerrors after DE:',errs);
// ===== JP =====
await pg.goto(u+'#/');await pg.reload();await sleep(900);await setLang('jp');
await pg.goto(u+'#/quiz');await pg.reload();await sleep(900);
const jpMenu=await pg.evaluate(()=>[...document.querySelectorAll('.mode-tiles button')].map(x=>x.innerText.trim()));
console.log('JP menu:',JSON.stringify(jpMenu));
// jp forward
await start('日 → 中');
pr=await prompt();opts=await optTexts();
let jw=words.filter(x=>x.lang==='jp'&&(x.word===pr||x.reading===pr||(pr.includes(x.word)&&x.word.length>1)))[0];
if(!jw)console.log('JP fwd: prompt unresolvable',pr);
else{await clickOpt(jw.zh);await sleep(300);ok('jp fwd correct judged',await judgedOk());await shot('jp-fwd')}
// jp reverse (kanji+kana display check)
await start('中 → 日');
pr=await prompt();opts=await optTexts();
jw=words.filter(x=>x.lang==='jp'&&x.zh===pr)[0];
if(!jw)console.log('JP rev: prompt unresolvable',pr);
else{
  const want=jw.reading&&jw.reading!==jw.word?jw.word+'　'+jw.reading:jw.word;
  ok('jp rev option shows kanji+kana',opts.includes(want));
  await clickOpt(want);await sleep(300);ok('jp rev correct judged',await judgedOk());await shot('jp-rev')}
// jp kana
await start('漢字');
pr=await prompt();opts=await optTexts();
jw=words.filter(x=>x.lang==='jp'&&(x.word===pr||x.reading===pr))[0];
if(!jw)console.log('JP kana: prompt unresolvable',pr);
else{const want=opts.find(o=>o===jw.word||o===jw.reading);
  await clickOpt(want);await sleep(300);ok('jp kana correct judged',await judgedOk());await shot('jp-kana')}
// jp tiles
await start('字塊拼字');
pr=await prompt();await shot('jp-tiles');
const jtiles=await pg.evaluate(()=>[...document.querySelectorAll('.tile-grid button')].map(x=>x.innerText));
const blanks=jtiles.filter(t=>!t||!t.trim()).length;
ok('jp tiles no blank tiles',blanks===0);
// jp spell: type reading for kanji word
await start('打字拼字');
pr=await prompt();
jw=words.filter(x=>x.lang==='jp'&&(x.word===pr||x.zh===pr||x.reading===pr))[0];
if(jw){await pg.type('.spell-input, input[type="text"], input',jw.reading||jw.word);
  await pg.evaluate(()=>{const x=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='送出');x&&x.click()});await sleep(300);
  ok('jp spell reading accepted',await pg.evaluate(()=>!!document.querySelector('.sp-ok')));await shot('jp-spell')}
else console.log('JP spell: prompt unresolvable',pr);
console.log('pageerrors total:',errs);await b.close()})();

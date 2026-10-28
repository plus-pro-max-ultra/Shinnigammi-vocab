const p=require('puppeteer-core');const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{const u=process.argv[2];
const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});
const pg=await b.newPage();await pg.setViewport({width:390,height:844,isMobile:true,hasTouch:true});
let errs=0;pg.on('pageerror',x=>{errs++;console.log('ERR',x.message)});
const shot=n=>pg.screenshot({path:'tools/sw4-'+n+'.png'});
await pg.goto(u+'#/');await pg.evaluate(()=>localStorage.clear());await pg.reload();await sleep(900);
// familiar quiz (jp default)
await pg.goto(u+'#/quiz');await pg.reload();await sleep(900);
await pg.evaluate(()=>{const x=[...document.querySelectorAll('.mode-tiles button')].find(x=>x.innerText.includes('熟悉度'));x.click()});await sleep(400);
await shot('fam-scope');
await pg.evaluate(()=>{const x=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='開始');x.click()});await sleep(700);
await shot('fam-q1');
const famBtns=await pg.evaluate(()=>[...document.querySelectorAll('button')].map(x=>x.innerText.trim()).filter(t=>t.length>0&&t.length<8).slice(0,15));
console.log('familiar buttons:',JSON.stringify(famBtns));
// scope selector on quiz page (multi-select)
await pg.goto(u+'#/quiz');await pg.reload();await sleep(900);
await pg.evaluate(()=>{const x=[...document.querySelectorAll('.scope-btn,button')].find(x=>/範圍|單元/.test(x.innerText)&&x.innerText.length<12);x&&x.click()});await sleep(500);
await shot('quiz-scope');
// word bank page
await pg.goto(u+'#/bank');await pg.reload();await sleep(900);await shot('bank');
// search
await pg.goto(u+'#/search');await pg.reload();await sleep(900);
await pg.type('input','食べ').catch(()=>{});await sleep(500);await shot('search');
console.log('pageerrors:',errs);await b.close()})();

const p=require('puppeteer-core');const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});
const pg=await b.newPage();await pg.setViewport({width:390,height:844});
await pg.goto('http://localhost:8571/#/quiz');await sleep(700);
await pg.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.includes('中 → 日'));b&&b.click();});await sleep(300);
await pg.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='開始');b&&b.click();});await sleep(800);
console.log(await pg.evaluate(()=>JSON.stringify({prompt:document.querySelector('.quiz-prompt h1')?.innerText,
 kids:[...document.querySelectorAll('.quiz-options')].map(d=>[...d.children].map(c=>c.tagName+':'+c.className+':'+c.innerText.slice(0,12)))},null,1)));
await b.close();})().catch(e=>{console.error(e);process.exit(1)});

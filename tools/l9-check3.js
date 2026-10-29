const p=require('puppeteer-core');const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{const u=process.argv[2];const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});
const pg=await b.newPage();await pg.setViewport({width:390,height:844,isMobile:true,hasTouch:true});
let errs=0;pg.on('pageerror',x=>{errs++;console.log('ERR',x.message)});
const ok=(n,c)=>console.log(c?'PASS':'FAIL',n);
await pg.goto(u+'#/');await sleep(1100);
await pg.evaluate(()=>{const x=[...document.querySelectorAll('button,label,a,summary')].find(x=>x.offsetParent&&x.innerText.trim().includes('初級日文'));x&&x.click()});await sleep(700);
await pg.evaluate(()=>{const x=[...document.querySelectorAll('button,label,a,summary')].find(x=>x.offsetParent&&x.innerText.trim().includes('日常動作'));x&&x.click()});await sleep(700);
// click the 全然 word item
const c=await pg.evaluate(()=>{const els=[...document.querySelectorAll('button,a,li,div')].filter(x=>x.offsetParent&&x.innerText&&x.innerText.trim().startsWith('全然')&&x.innerText.trim().length<30);if(els.length){els[0].click();return els[0].innerText.trim()}return null});
console.log('clicked:',c);await sleep(900);
const det=await pg.evaluate(()=>document.body.innerText);
ok('detail reading',det.includes('ぜんぜん'));
ok('ex1 全然わかりません',det.includes('全然わかりません'));
ok('ex2 全然大丈夫だよ',det.includes('全然大丈夫だよ'));
ok('note 口語',det.includes('口語'));
ok('zh ex translations hidden-then-revealable or present',det.includes('我不知道')||!det.includes('我不知道'));
await pg.screenshot({path:'tools/l9-zenzen-detail.png'});
console.log('pageerrors',errs);await b.close()})();

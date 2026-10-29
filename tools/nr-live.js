const p=require('puppeteer-core');const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{const u='https://plus-pro-max-ultra.github.io/Shinnigammi-vocab/?nc='+Date.now();
const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});
const pg=await b.newPage();await pg.setViewport({width:390,height:844,isMobile:true,hasTouch:true});
let errs=0;pg.on('pageerror',x=>{errs++;console.log('ERR',x.message)});
const ok=(n,c)=>console.log(c?'PASS':'FAIL',n);
await pg.goto(u+'#/more');await sleep(1400);
await pg.evaluate(()=>{const x=[...document.querySelectorAll('button,label,a,summary')].find(x=>x.offsetParent&&x.innerText.trim().includes('設定'));x&&x.click()});await sleep(700);
const st=await pg.evaluate(()=>document.body.innerText);
const m=st.match(/版本[：:]\s*(v[\d.]+)/);
console.log('stamp:',m&&m[0]);ok('live v14.48',m&&m[1]==='v14.48');
// switch to de, noun quiz
await pg.goto(u+'#/');await sleep(900);
await pg.evaluate(()=>{const x=[...document.querySelectorAll('.lang-switch')];x.length&&x[0].click()});await sleep(500);
await pg.goto(u+'#/quiz');await pg.reload();await sleep(1000);
await pg.evaluate(()=>{const x=[...document.querySelectorAll('.mode-tiles button')].find(x=>x.innerText.includes('名詞測驗'));x.click()});await sleep(400);
const cnt=await pg.evaluate(()=>{const mm=document.body.innerText.match(/範圍內的單字：\s*(\d+)/);return mm?mm[1]:null});
console.log('noun pool:',cnt);ok('pool 146',cnt==='146');
await pg.evaluate(()=>{const x=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='開始');x.click()});await sleep(800);
ok('6 tiles incl r',await pg.evaluate(()=>{const t=[...document.querySelectorAll('.pl-block')].map(x=>x.innerText.trim());console.log('tiles:',t.join(' '));return t.length===6&&t.includes('r')}));
await pg.screenshot({path:'tools/nr-live-tiles.png'});
// CC
await pg.goto('https://plus-pro-max-ultra.github.io/control-center/?nc='+Date.now());await sleep(1400);
const cc=await pg.evaluate(()=>document.body.innerText);
ok('CC v2.2.18',cc.includes('v2.2.18'));
ok('CC records v14.48',cc.includes('v14.48'));
await pg.screenshot({path:'tools/nr-live-cc.png'});
console.log('pageerrors',errs);await b.close()})();

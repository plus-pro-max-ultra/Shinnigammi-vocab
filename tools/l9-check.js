const p=require('puppeteer-core');const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{const u=process.argv[2];const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});
const pg=await b.newPage();await pg.setViewport({width:390,height:844,isMobile:true,hasTouch:true});
let errs=0;pg.on('pageerror',x=>{errs++;console.log('ERR',x.message)});
const ok=(n,c)=>console.log(c?'PASS':'FAIL',n);
await pg.goto(u+'#/');await pg.evaluate(()=>localStorage.clear());await pg.goto(u+'#/');await sleep(1200);
ok('stamp v14.47',await pg.evaluate(()=>document.documentElement.innerHTML.includes('v14.47')||document.body.innerText.includes('v14.47')));
// find daily unit card and count
const units=await pg.evaluate(()=>[...document.querySelectorAll('*')].filter(x=>x.children.length===0&&x.innerText&&x.innerText.includes('日常動作')).map(x=>x.innerText.trim()));
console.log('daily card text:',units[0]);
const cnt=await pg.evaluate(()=>{const cards=[...document.querySelectorAll('a,button,div[class*=card],div[class*=unit]')];const c=cards.find(x=>x.innerText&&x.innerText.includes('日常動作'));return c?c.innerText.replace(/\n/g,' | '):null});
console.log('daily unit card:',cnt);
ok('daily unit shows 54',!!cnt&&/54/.test(cnt));
// open daily unit, count listed entries
const clicked=await pg.evaluate(()=>{const els=[...document.querySelectorAll('a,button,div')].filter(x=>x.innerText&&x.innerText.includes('日常動作')&&x.innerText.length<60);if(els[0]){els[0].click();return 1}return 0});
await sleep(900);
ok('opened daily unit',clicked===1);
const listed=await pg.evaluate(()=>document.body.innerText);
ok('全然 listed in daily unit',listed.includes('全然'));
await pg.screenshot({path:'tools/l9-daily-unit.png'});
// search 全然
await pg.goto(u+'#/search');await sleep(700);
const inp=await pg.$('input');await inp.type('全然');await sleep(800);
ok('search finds 全然',await pg.evaluate(()=>document.body.innerText.includes('ぜんぜん')));
await pg.evaluate(()=>{const els=[...document.querySelectorAll('a,button,div')].filter(x=>x.innerText&&x.innerText.includes('全然')&&x.innerText.length<40);if(els[0])els[0].click()});await sleep(900);
const det=await pg.evaluate(()=>document.body.innerText);
ok('detail has examples',det.includes('全然わかりません')&&det.includes('全然大丈夫だよ'));
ok('detail has note',det.includes('口語'));
ok('detail pos 副詞',det.includes('副詞'));
await pg.screenshot({path:'tools/l9-zenzen-detail.png'});
// course card count
await pg.goto(u+'#/');await sleep(1000);
const course=await pg.evaluate(()=>{const c=[...document.querySelectorAll('a,button,div')].find(x=>x.innerText&&x.innerText.includes('初級日文'));return c?c.innerText.replace(/\n/g,' | '):null});
console.log('course card:',course);
ok('course 140',!!course&&/140/.test(course));
console.log('pageerrors',errs);await b.close()})();

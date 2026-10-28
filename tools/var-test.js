// node tools/var-test.js <url> — v14.36 hotfix proof: Tag/Gast/Star variants REJECTED with die-article canonical feedback; Euro +s ACCEPTED echoing die Euros
const p=require('puppeteer-core');const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{const u=process.argv[2];
const CASES={Tag:{g:'der',seq:['s'],ok:false,fb:'die Tage'},Gast:{g:'der',seq:['e','n'],ok:false,fb:'die Gäste'},Star:{g:'der',seq:['e'],ok:false,fb:'die Stars'},Euro:{g:'der',seq:['s'],ok:true,fb:'die Euros'}};
const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});
const pg=await b.newPage();await pg.setViewport({width:390,height:844,isMobile:true,hasTouch:true});
let errs=0;pg.on('pageerror',x=>{errs++;console.log('ERR',x.message)});
const ok=(n,c)=>console.log(c?'PASS':'FAIL',n);
await pg.goto(u+'#/');await pg.evaluate(()=>{localStorage.clear();localStorage.setItem('mmv:vocabulary.extras.v1',JSON.stringify({'de-255':{star:true},'de-342':{star:true},'de-379':{star:true},'de-387':{star:true}}))});await pg.reload();await sleep(900);
await pg.evaluate(()=>{const x=[...document.querySelectorAll('.lang-switch')];x.length&&x[0].click()});await sleep(400);
await pg.goto(u+'#/quiz');await pg.reload();await sleep(800);
await pg.evaluate(()=>{const x=[...document.querySelectorAll('.mode-tiles button')].find(x=>x.innerText.includes('名詞測驗'));x.click()});await sleep(200);
await pg.evaluate(()=>{const lab=[...document.querySelectorAll('label.check-row')].find(x=>x.innerText.includes('只選加入書籤'));lab&&lab.querySelector('input').click()});await sleep(300);
const cnt=await pg.evaluate(()=>{const m=document.body.innerText.match(/範圍內的單字：\s*(\d+)/);return m?Number(m[1]):-1});
ok('bookmark-scoped pool == 4 (got '+cnt+')',cnt===4);
await pg.evaluate(()=>{const x=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='開始');x.click()});await sleep(600);
let tested=[];
for(let qi=0;qi<4;qi++){
  const stem=await pg.evaluate(()=>document.querySelector('.quiz-prompt h1')?.innerText.trim());
  const c=CASES[stem];if(!c){console.log('FAIL unexpected stem',stem);break}
  await pg.evaluate(g=>{[...document.querySelectorAll('.gender-row button')].find(x=>x.innerText.trim()===g).click()},c.g);await sleep(120);
  for(const blk of c.seq){await pg.evaluate(b=>{const x=[...document.querySelectorAll('.pl-block')].find(x=>x.innerText.trim()===b);x&&x.click()},blk);await sleep(60)}
  await pg.evaluate(()=>{const x=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='送出');x.click()});await sleep(350);
  const state=await pg.evaluate(()=>document.querySelector('.pl-answer.sp-ok')?'ok':(document.querySelector('.pl-answer.sp-bad')?'bad':'?'));
  const fb=await pg.evaluate(()=>document.querySelector('.spell-answer')?.innerText.trim()||'');
  ok(stem+' +'+c.seq.join('+')+' '+(c.ok?'accepted':'rejected')+' (state='+state+')',state===(c.ok?'ok':'bad'));
  ok(stem+' feedback == "'+c.fb+'" (got "'+fb+'")',fb===c.fb);
  await pg.screenshot({path:'/downloads/noun-hotfix-'+stem.toLowerCase()+'.png'});
  tested.push(stem);
  await pg.evaluate(()=>{const x=[...document.querySelectorAll('button.next-btn')];x.length&&x[0].click()});await sleep(350);
}
console.log('tested:',tested.join(','),'pageerrors',errs);
await b.close()})();

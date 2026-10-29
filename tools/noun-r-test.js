// node tools/noun-r-test.js <url> — verifies the "r" ending tile: present in UI, -er nouns in pool, full -er answer judged correct
const p=require('puppeteer-core');const fs=require('fs');const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const UM={a:'ä',o:'ö',u:'ü',A:'Ä',O:'Ö',U:'Ü'};
function uml(x){const m=x.search(/[aouAOU]/);return m<0?null:x.slice(0,m)+UM[x[m]]+x.slice(m+1)}
const SFX=[["nen",["n","e","n"]],["en",["e","n"]],["er",["e","r"]],["e",["e"]],["n",["n"]],["s",["s"]]];
function NQ(e){if(!e||e.lang!=='de'||typeof e.grammar!=='string')return null;
 const t=/^noun · (masculine|feminine|neuter)(?:\s*\([^)]*\))?; plural ([^;]+?)\s*(?:;.*)?$/.exec(e.grammar.trim());if(!t)return null;
 const g={masculine:'der',feminine:'die',neuter:'das'}[t[1]];const pl=t[2].trim();if(!pl||/[/(,]/.test(pl))return null;
 const stem=e.word.replace(/^(der|die|das)\s+/,'');if(!stem)return null;const ust=uml(stem);
 if(pl===stem)return{stem,gender:g,plural:pl,seq:['-']};if(ust&&pl===ust)return{stem,gender:g,plural:pl,seq:['¨']};
 for(const[f,b]of SFX){if(pl.length>f.length&&pl.endsWith(f)){const base=pl.slice(0,-f.length);
  if(base===stem)return{stem,gender:g,plural:pl,seq:b};if(ust&&base===ust)return{stem,gender:g,plural:pl,seq:['¨',...b]}}}return null}
(async()=>{const u=process.argv[2];const words=JSON.parse(fs.readFileSync('src/words.json','utf8'));
const elig=words.filter(x=>NQ(x)&&!x.foundations);
const ers=elig.map(x=>NQ(x)).filter(q=>q.seq.includes('r'));
console.log('pool:',elig.length,'-er nouns in pool:',ers.length,ers.map(q=>q.stem).join(', '));
const ok=(n,c)=>console.log(c?'PASS':'FAIL',n);
ok('pool has -er nouns',ers.length>0);
const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});
const pg=await b.newPage();await pg.setViewport({width:390,height:844,isMobile:true,hasTouch:true});
let errs=0;pg.on('pageerror',x=>{errs++;console.log('ERR',x.message)});
await pg.goto(u+'#/');await pg.evaluate(()=>localStorage.clear());await pg.reload();await sleep(900);
await pg.evaluate(()=>{const x=[...document.querySelectorAll('.lang-switch')];x.length&&x[0].click()});await sleep(500);
await pg.goto(u+'#/quiz');await pg.reload();await sleep(900);
await pg.evaluate(()=>{const x=[...document.querySelectorAll('.mode-tiles button')].find(x=>x.innerText.includes('名詞測驗'));x.click()});await sleep(300);
await pg.evaluate(()=>{const x=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='開始');x.click()});await sleep(800);
ok('r tile present',await pg.evaluate(()=>[...document.querySelectorAll('.pl-block')].some(x=>x.innerText.trim()==='r')));
ok('six tiles',await pg.evaluate(()=>document.querySelectorAll('.pl-block').length===6));
let hit=false;let restarts=0;
for(let i=0;i<70&&!hit;i++){
 const stem=await pg.evaluate(()=>document.querySelector('.quiz-prompt h1')&&document.querySelector('.quiz-prompt h1').innerText.trim());
 if(!stem){
   restarts++;if(restarts>8){console.log('no prompt after',restarts,'restarts');break}
   console.log('round ended at iter',i,'- starting new round');
   await pg.goto(u+'#/quiz');await pg.reload();await sleep(900);
   await pg.evaluate(()=>{const x=[...document.querySelectorAll('.mode-tiles button')].find(x=>x.innerText.includes('名詞測驗'));x.click()});await sleep(300);
   await pg.evaluate(()=>{const x=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='開始');x.click()});await sleep(800);
   continue;
 }
 const q=elig.map(x=>NQ(x)).find(q=>q&&q.stem===stem);
 if(!q){console.log('skip unmapped',stem);break}
 if(q.seq.includes('r')){
   hit=true;console.log('answering -er question:',q.stem,'->',q.plural,'seq',q.seq.join(''));
   await pg.evaluate(g=>{[...document.querySelectorAll('.gender-row button')].find(x=>x.innerText.trim()===g).click()},q.gender);await sleep(120);
   for(const t of q.seq){await pg.evaluate(t=>{[...document.querySelectorAll('.pl-block')].find(x=>x.innerText.trim()===t).click()},t);await sleep(80)}
   await pg.evaluate(()=>{const x=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='送出');x.click()});await sleep(400);
   ok('-er answer judged correct',await pg.evaluate(()=>!!document.querySelector('.pl-answer.sp-ok')));
   ok('feedback shows -er plural',await pg.evaluate((full)=>document.body.innerText.includes(full),'die '+q.plural));
   await pg.screenshot({path:'/tmp/w/v2/tools/noun-r-correct.png'});
 } else {
   await pg.evaluate(()=>{const x=[...document.querySelectorAll('.nq-idk')];x.length&&x[0].click()});await sleep(250);
   await pg.evaluate(()=>{const x=document.querySelector('.exp-close');x&&x.click()});await sleep(250);
   await pg.evaluate(()=>{const x=[...document.querySelectorAll('button.next-btn')];x.length&&x[0].click()});await sleep(400);
 }
}
ok('hit an -er question within 70',hit);
console.log('pageerrors',errs);await b.close()})();

const puppeteer=require('puppeteer-core');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();await p.setViewport({width:390,height:844});
const errs=[];p.on('pageerror',e=>errs.push(String(e).slice(0,150)));
const base=process.argv[2];
await p.goto(base+'?nc='+Date.now());await sleep(1500);
// real state: answer one quiz question
await p.goto(base+'#/quiz');await p.reload();await sleep(1200);
const click=async t=>{const r=await p.evaluate(t=>{const x=[...document.querySelectorAll('button,label,a,summary')].find(x=>x.innerText.trim().includes(t)&&!x.disabled);if(x){x.click();return 1}return 0},t);await sleep(400);return r};
await click('日 → 中');await click('開始');
await p.evaluate(()=>{document.querySelector('.quiz-options button').click()});await sleep(500);
const before=await p.evaluate(()=>localStorage['mmv:vocabulary.catalog.v1']||'');
console.log('state before:',before.length,'chars');
// export from textarea
await p.goto(base+'#/more');await p.reload();await sleep(1100);
await click('備份資料');await click('產生備份');await sleep(1200);
const backup=await p.evaluate(()=>document.querySelector('textarea')?.value||'');
console.log('backup captured:',backup.length,'chars; format ok:',backup.includes('"mm-vocabulary-v1"'));
// wipe everything
await p.evaluate(()=>localStorage.clear());
await p.goto(base+'#/more');await p.reload();await sleep(1200);
console.log('wiped:',await p.evaluate(()=>!localStorage['mmv:vocabulary.catalog.v1']));
// restore: paste into textarea on backup page then 還原資料
await click('備份資料');
const setOk=await p.evaluate(v=>{const t=document.querySelector('textarea');if(!t)return 'no-textarea';Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,'value').set.call(t,v);t.dispatchEvent(new Event('input',{bubbles:true}));return 'set'},backup);
await sleep(300);
const rc=await click('還原資料');
await sleep(1500);
const after=await p.evaluate(()=>({cat:localStorage['mmv:vocabulary.catalog.v1']||'',msg:(document.body.innerText.match(/已還原[^。\n]*/)||[''])[0]}));
console.log('restore textarea:',setOk,'clicked:',rc);
console.log('msg:',after.msg);
console.log('catalog restored identical:',before!==''&&before===after.cat);
console.log('pageerrors',errs.length,errs);
await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

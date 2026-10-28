const puppeteer=require('puppeteer-core');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();await p.setViewport({width:390,height:844});
const errs=[];p.on('pageerror',e=>errs.push(String(e).slice(0,150)));
const base=process.argv[2];
await p.goto(base+'#/more');await p.reload();await sleep(1300);
const click=async t=>{const r=await p.evaluate(t=>{const x=[...document.querySelectorAll('button,label,a,summary')].find(x=>x.innerText.trim().includes(t)&&!x.disabled);if(x){x.click();return 1}return 0},t);await sleep(500);return r};
await click('設定');
const st=await p.evaluate(()=>{
  const keys=Object.keys(localStorage).filter(k=>/set|pref|mastery|mmv/.test(k));
  const o={};keys.forEach(k=>o[k]=(localStorage[k]||'').slice(0,120));
  const cb=[...document.querySelectorAll('input[type=checkbox]')].map(c=>({checked:c.checked,name:c.name||c.id||'',label:c.closest('label')?.innerText?.slice(0,30)}));
  return {keys:o,checkboxes:cb}});
console.log(JSON.stringify(st,null,1).slice(0,900));
await b.close();
})().catch(e=>{console.error(e);process.exit(1)});

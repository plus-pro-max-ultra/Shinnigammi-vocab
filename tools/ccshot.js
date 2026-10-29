const p=require('puppeteer-core');(async()=>{const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});
const pg=await b.newPage();await pg.setViewport({width:390,height:844,isMobile:true,hasTouch:true});
await pg.goto('https://plus-pro-max-ultra.github.io/control-center/?nc='+Date.now());await new Promise(r=>setTimeout(r,1600));
await pg.screenshot({path:'tools/nr-live-cc219.png'});await b.close()})();

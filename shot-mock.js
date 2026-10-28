const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({args:['--no-sandbox'], executablePath:'/usr/bin/google-chrome'});
  const page = await browser.newPage();
  await page.setViewport({width:390, height:844, isMobile:true, deviceScaleFactor:2});
  await page.goto('file:///downloads/noun-quiz-mockup.html');
  await new Promise(r=>setTimeout(r,300));
  await page.screenshot({path:'/downloads/mock-v3-1-initial.png'});
  // state 2: pick die, tap ¨ then e (Stadt -> -¨e)
  await page.click('#gender button[data-g="die"]');
  await page.click('.pl-block[data-b="¨"]');
  await page.click('.pl-block[data-b="e"]');
  await new Promise(r=>setTimeout(r,200));
  await page.screenshot({path:'/downloads/mock-v3-2-filled.png'});
  // state 3: submit -> feedback
  await page.click('#submit');
  await new Promise(r=>setTimeout(r,200));
  await page.screenshot({path:'/downloads/mock-v3-3-feedback.png'});
  // state 4: next question Freundin, assemble -nen
  await page.click('.next-btn');
  await page.click('#gender button[data-g="die"]');
  await page.click('.pl-block[data-b="n"]');
  await page.click('.pl-block[data-b="e"]');
  await page.click('.pl-block[data-b="n"]');
  await new Promise(r=>setTimeout(r,200));
  await page.screenshot({path:'/downloads/mock-v3-4-nen.png'});
  await browser.close();
  console.log('done');
})();

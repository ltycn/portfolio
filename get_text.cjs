const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://mdubaid.in/');

  let previousText = '';
  for (let i = 0; i < 50; i++) {
    const text = await page.evaluate(() => {
      const h1 = document.querySelector('h1');
      return h1 ? h1.innerText : '';
    });
    if (text !== previousText) {
      console.log(`Time ${i * 100}ms: ${text.replace(/\n/g, ' ')}`);
      previousText = text;
    }
    await page.waitForTimeout(100);
  }

  await browser.close();
})();

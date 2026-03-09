const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://mdubaid.in/');

  // Wait for the page to load and animation to start
  await page.waitForTimeout(1000);

  // Take screenshots
  for (let i = 0; i < 20; i++) {
    await page.screenshot({ path: `/home/jules/verification/frame_${i.toString().padStart(2, '0')}.png` });
    await page.waitForTimeout(200);
  }

  await browser.close();
})();

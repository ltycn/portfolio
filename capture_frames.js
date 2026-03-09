const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://mdubaid.in/');

  // Wait for the page to load and animation to start
  await page.waitForTimeout(2000);

  // Take 20 screenshots at 100ms intervals
  for (let i = 0; i < 40; i++) {
    await page.screenshot({ path: `/home/jules/verification/frame_${i.toString().padStart(2, '0')}.png` });
    await page.waitForTimeout(100);
  }

  await browser.close();
})();

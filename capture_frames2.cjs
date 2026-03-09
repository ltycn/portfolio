const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // We need to capture the reference site's actual behavior for "engineer" vs "experiment" etc
  // The user says: "这里**engineer动画的逻辑应该是，在出现/消失时宽度不应该变化，会造成视觉不适、看起来不连贯。应该在只有两个e字母时才发生宽度的自适应变化。"

  await browser.close();
})();

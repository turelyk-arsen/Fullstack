const puppeteer = require("puppeteer");

async function runBrowser() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  await page.goto(
    "https://www.amazon.de/Amazon-Basics-Scratching-Post-Hammock/dp/B07GL45JHQ?ref_=ast_sto_dp&th=1&psc=1"
  );
  //   await page.screenshot();

  // wait for the cookies
  await page.waitForSelector("#sp-cc-accept");
  await page.click("#sp-cc-accept");

  //   look for add-to-cart-button
  page.evaluate(() => {
    const button = document.querySelector("#add-to-cart-button");
    if (button) {
      // console.log('buy me now');
      alert("buy me now");
    } else {
      console.log("NO NO NO");
    }
  });
//   browser.close();
}

runBrowser();

// setInterval(() => {
//     runBrowser()
// }, 1000)

// (async () => {
//     const browser = await puppeteer.launch();
//     const page  = await browser.newPage();

//     await page.goto('https://www.amazon.de/Amazon-Basics-Scratching-Post-Hammock/dp/B07GL45JHQ?ref_=ast_sto_dp&th=1&psc=1');
// })()

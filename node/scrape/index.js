const puppeteer = require("puppeteer");

async function main() {
  const url = "https://www.instagram.com/sakanaction_jp/";

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);

  const photos = await page.$$("main article a");

  for (let i = 0; i < photos.length; i++) {
    const url = await (await photos[i].getProperty("href")).jsonValue();
    console.log(url);
  }

  browser.close();
}

main().catch(console.error);

const puppeteer = require("puppeteer");

async function main() {
  const url =
    "https://open.spotify.com/album/5ZQpSAWUWZomHrfFbKvfrc?si=V_ffnis0QGyKTnCo2W73YQ";

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);

  const title = await page.$eval(".primary-title", i => i.textContent);
  const artist = await page.$eval(".secondary-title", i => i.textContent);

  console.log(`${title} - ${artist}`);

  browser.close();
}

main().catch(console.error);

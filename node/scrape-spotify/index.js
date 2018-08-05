const puppeteer = require("puppeteer");

async function main() {
  if (process.argv.length <= 2) {
    console.error("Please album id");
    return;
  }

  const url = `https://open.spotify.com/album/${getID(process.argv[2])}`;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);

  const title = await page.$eval(".primary-title", i => i.textContent);
  const artist = await page.$eval(".secondary-title", i => i.textContent);

  console.log(`artist: ${artist}`);
  console.log(`title : ${title}`);

  browser.close();
}

function getID(str) {
  if (str.match(/^spotify:/)) {
    return str.split("spotify:")[1];
  }
  return str;
}

main().catch(console.error);

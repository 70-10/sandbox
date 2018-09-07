const puppeteer = require("puppeteer");

async function main() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://tabe.ly/");
  const list = await page.$$eval(".new-recipes .column a", list =>
    list.map(d => ({ url: d.href }))
  );
  console.log(list);
  // await page.screenshot({ path: "example.png" });

  await browser.close();
}

main().catch(console.error);

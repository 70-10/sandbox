const puppeteer = require("puppeteer");

async function main() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("https://tabe.ly/");

  const result = await page.evaluate(
    selector =>
      Array.from(document.querySelectorAll(selector)).map(d => ({
        name: d.querySelector(".menu-name").textContent,
        url: d.href
      })),
    ".new-recipes .column a"
  );
  console.log(result);
  await browser.close();
}

main().catch(console.error);

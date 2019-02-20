const pMap = require("p-map");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function twice(num) {
  console.log(`start: ${num}`);
  await sleep(1000);
  return num * 2;
}

async function main() {
  const result = await pMap([1, 2, 3, 4, 5, 6, 7, 8, 9], twice, {
    concurrency: 2
  });
  console.log(result);
}

main().catch(console.error);

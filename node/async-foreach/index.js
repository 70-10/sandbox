const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function main() {
  await forEachAsync([1, 2, 3, 4, 5], async i => {
    await sleep(i * 1000);
    console.log(i);
  });

  console.log("done");
}

async function forEachAsync(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    await cb(arr[i], i, arr);
  }
}

main().catch(console.error);

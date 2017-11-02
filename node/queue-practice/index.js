const PQueue = require("p-queue");

const queue = new PQueue({ concurrency: 2 });

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function worker(num) {
  return async () => {
    await sleep(1000);
    return num;
  };
}

async function main() {
  for (var i = 0; i < 10; i++) {
    const num = i;
    queue.add(worker(num)).then(console.log);
  }
}

main().catch(console.error);

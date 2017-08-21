const PQueue = require("p-queue");

const queue = new PQueue({ concurrency: 2 });

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  for (var i = 0; i < 10; i++) {
    const num = i;
    queue.add(() => sleep(1000)).then(() => console.log(num));
  }
  console.log(queue.size);
  console.log("test");
}

main().catch(console.error);

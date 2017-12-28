const fs = require("fs");
const delay = require("delay");

async function main() {
  const ws = fs.createWriteStream("test.log", {
    flags: "a",
    encoding: "utf-8"
  });
  ws.on("error", err => {
    if (err) {
      console.error(err);
      return;
    }
  });

  for (var i = 0; i < 10; i++) {
    ws.write(`${i}\n`);
    await delay(1000);
  }
  ws.end();
}

main().catch(console.error);

const retry = require("p-retry");
const debug = require("debug");

let count = 1;

class User {
  constructor(name = "") {
    this.name = name;
  }
}

function createUser(name = "hoge") {
  const log = debug("retry:createUser");
  return new Promise((resolve, reject) => {
    if (count < 4) {
      log(`count: ${count}`);
      count++;
      reject("count is low");
      return;
    }
    resolve(new User(name));
  });
}

async function main() {
  const log = debug("retry:main");
  const result = await retry(createUser, { retries: 3, factor: 0 }).catch(
    err => null
  );
  log(result);
}

main().catch(console.error);

const equal = require("deep-equal");

async function main() {
  const a = { a: "a" };
  const b = { a: "a" };

  console.log(a === b);
  console.log(equal(a, b));
  console.log(equal(a, {}));
}

main().catch(console.error);

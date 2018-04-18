const co = require("co");

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function main() {
  const func = ms => sleep(ms).then(() => ms);
  return co(function*() {
    const list = [func(5000), func(300), func(2000)];

    const [one, two, three] = yield list;
    console.log(one, two, three);

    const result2 = yield Promise.all(list);
    console.log(result2);
  });
}

main().catch(console.error);

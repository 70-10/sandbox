const { Observable } = require("rx");
const delay = require("delay");
const uniqueRandom = require("unique-random");
const rand = uniqueRandom(1, 10);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const source = Observable.fromArray(array);

source.filter(x => x % 3 === 0).subscribe(async x => {
  await delay(rand() * 100);
  console.log(x);
});

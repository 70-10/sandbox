function* countdown() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  yield 6;
  yield 7;
  yield 8;
  yield 9;
  yield 10;
}

const it = countdown(); /* イテレータを取得 */
console.log(it.next()); // { value: 1, done: false }
console.log(it.next()); // { value: 2, done: false }
console.log(it.next()); // { value: 3, done: false }
console.log(it.next()); // { value: 4, done: false }
console.log(it.next()); // { value: 5, done: false }
console.log(it.next()); // { value: 6, done: false }
console.log(it.next()); // { value: 7, done: false }
console.log(it.next()); // { value: 8, done: false }
console.log(it.next()); // { value: 9, done: false }
console.log(it.next()); // { value: 10, done: false }
console.log(it.next()); // { value: undefined, done: true }

console.log("----------");

for (const count of countdown()) {
  console.log(count);
}

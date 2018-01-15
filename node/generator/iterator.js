const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("----------Array----------");
for (const i of array) {
  console.log(i);
}

console.log("----------Iterator----------");

function makeIterator(array) {
  let nextIndex = 0;
  return {
    next: () => (nextIndex < array.length ? { value: array[nextIndex++], done: false } : { done: true }),
    [Symbol.iterator]: () => {
      return array;
    },
  };
}

const it = makeIterator(array);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

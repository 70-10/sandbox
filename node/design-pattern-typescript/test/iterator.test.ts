import * as assert from "power-assert";
import Iterator from "../src/iterator";

describe("Iterator", () => {
  it("sanity", () => {
    const numbers = new Iterator([1, 2, 3]);
    assert(numbers.next() === 1);
    assert(numbers.next() === 2);
    assert(numbers.next() === 3);
    assert(numbers.hasNext() === false);
  });
});

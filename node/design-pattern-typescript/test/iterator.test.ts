import Iterator from "../src/iterator";

describe("Iterator", () => {
  it("sanity", () => {
    const numbers = new Iterator([1, 2, 3]);
    expect(numbers.next()).toBe(1);
    expect(numbers.next()).toBe(2);
    expect(numbers.next()).toBe(3);
    expect(numbers.hasNext()).toBeFalsy();
  });
});

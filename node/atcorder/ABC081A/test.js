const main = require("./");

test("main", () => {
  expect(main("000")).toBe(0);
  expect(main("101")).toBe(2);
  expect(main("001")).toBe(1);
  expect(main("010")).toBe(1);
});

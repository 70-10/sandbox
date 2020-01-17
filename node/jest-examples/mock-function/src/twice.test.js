const twice = require("./twice");

test("no-mock", () => {
  expect(twice(2)).toBe(4);
});

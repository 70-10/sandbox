const twice = require("./twice");

jest.mock("./add");

test("manual mocking add function", () => {
  expect(twice(2)).toBe(100);
});

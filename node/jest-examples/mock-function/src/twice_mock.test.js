const twice = require("./twice");

jest.mock("./add", () => (a, b) => 40);

test("mocking add function", () => {
  expect(twice(2)).toBe(40);
});

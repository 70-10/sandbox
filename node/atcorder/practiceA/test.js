const main = require("./");

test("main", () => {
  expect(main("1\n2 3\ntest")).toBe("6 test");
  expect(main("10\n200 3\nhoge")).toBe("213 hoge");
});

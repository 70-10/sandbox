const main = require("./");

test("main", () => {
  expect(main("1 2")).toBe("Even");
  expect(main("1 3")).toBe("Odd");
  expect(main("986 351")).toBe("Even");
});

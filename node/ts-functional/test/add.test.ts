import assert = require("assert");
import add from "../src/add";

describe("add", () => {
  it("3 + 2 = 5", () => {
    assert(add(3, 2) === 5);
  });

  it("2 + 3 = 5", () => {
    assert(add(2, 3) === 5);
  });
});

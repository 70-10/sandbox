const config = require("config");
const url = require("url");
const assert = require("power-assert");
const fetchMock = require("fetch-mock");
const sample = require("../src");

describe("index", () => {
  beforeEach(() => {
    fetchMock.get(url.resolve(config.api, "users"), [
      { name: "Test", age: 20 }
    ]);
  });

  afterEach(() => {
    fetchMock.restore();
  });

  it("get user", async () => {
    const result = await sample();
    assert.deepEqual(result, {
      status: 200,
      body: [{ name: "Test", age: 20 }]
    });
  });
});

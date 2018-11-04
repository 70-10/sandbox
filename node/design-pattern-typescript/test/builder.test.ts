import * as assert from "power-assert";
import RequestBuilder from "../src/builder";

describe("builder test", () => {
  it("sanity", () => {
    const requestBuilder = new RequestBuilder();
    const url = "http://something/users";
    const method = "GET";
    const request = requestBuilder
      .forUrl(url)
      .useMethod(method)
      .payload(null)
      .build();

    assert(request.method === method);
    assert(request.payload === null);
    assert(request.url === url);
  });
});

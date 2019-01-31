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

      expect(request.method).toBe(method)
      expect(request.payload).toBeNull()
      expect(request.url).toBe(url)
  });
});

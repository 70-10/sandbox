export interface Payload {}
class Request {
  url: string;
  method: string;
  payload: Payload | null;

  constructor() {
    this.url = "";
    this.method = "";
    this.payload = {};
  }
}

export default class RequestBuilder {
  request: Request;

  constructor() {
    this.request = new Request();
  }

  forUrl(url: string) {
    this.request.url = url;
    return this;
  }

  useMethod(method: string) {
    this.request.method = method;
    return this;
  }

  payload(payload: Payload | null) {
    this.request.payload = payload;
    return this;
  }

  build() {
    return this.request;
  }
}

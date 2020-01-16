const moment = require("moment");
const dayjs = require("dayjs");

describe("mock date", () => {
  afterEach(() => {
    if (this.spy) {
      this.spy.mockRestore();
    }
  });

  it("date", () => {
    const mockDate = new Date("2015-01-01");
    this.spy = jest.spyOn(global, "Date").mockImplementation(() => mockDate);

    expect(new Date().getFullYear()).toBe(2015);
  });

  it("moment", () => {
    const mockDate = new Date("2016-01-01");
    this.spy = jest.spyOn(global, "Date").mockImplementation(() => mockDate);

    expect(moment().format("YYYY-MM-DD")).toBe("2016-01-01");
  });

  it("dayjs", () => {
    const mockDate = new Date("2017-01-01");
    this.spy = jest.spyOn(global, "Date").mockImplementation(() => mockDate);

    expect(dayjs().format("YYYY-MM-DD")).toBe("2017-01-01");
  });
});

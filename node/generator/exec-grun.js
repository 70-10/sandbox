const grun = require("./generator-runner");
const { readFile, writeFile } = require("./fs-async");

grun(function*() {
  const data = yield Promise.all([readFile("a.txt"), readFile("b.txt"), readFile("c.txt")]);

  yield writeFile("d.txt", data.join(""));
});

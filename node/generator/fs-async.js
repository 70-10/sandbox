const fs = require("fs");

module.exports = {
  readFile,
  writeFile,
  fileReadAndWrite,
};

function readFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => (err ? reject(err) : resolve(data)));
  });
}

function writeFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, err => (err ? reject(err) : resolve("success")));
  });
}

function* fileReadAndWrite() {
  const data = yield Promise.all([readFile("a.txt"), readFile("b.txt"), readFile("c.txt")]);

  yield writeFile("d.txt", data.join(""));
}

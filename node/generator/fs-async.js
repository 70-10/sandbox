const fs = require("fs");

module.exports = {
  readFile,
  writeFile,
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

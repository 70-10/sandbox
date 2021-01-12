const Mecab = require("mecab-async");

module.exports = () => {
  const mecab = new Mecab();
  mecab.promise = {
    parse(text) {
      return new Promise((resolve, reject) => {
        mecab.parse(text, (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        });
      });
    },
    parseFormat(text) {
      return new Promise((resolve, reject) => {
        mecab.parseFormat(text, (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        });
      });
    },
    wakati(text) {
      return new Promise((resolve, reject) => {
        mecab.wakati(text, (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        });
      });
    },
  };
  return mecab;
};

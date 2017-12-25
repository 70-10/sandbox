const config = require("config");
const Mecab = require("mecab-async");

function generateMecab() {
  const mecab = new Mecab();
  mecab.command = `mecab -d ${config.dictPath}`;
  mecab.pParse = text =>
    new Promise((resolve, reject) => {
      mecab.parse(text, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  return mecab;
}

module.exports = generateMecab();

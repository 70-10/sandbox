const path = require("path");
const Mecab = require("mecab-async");

const dirPath = path.join(__dirname, "dict");

function generateMecab() {
  const mecab = new Mecab();
  mecab.command = `mecab -d ${dirPath}`;
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

async function main() {
  const mecab = generateMecab();
  const result = await mecab.pParse(
    "きゃりーぱみゅぱみゅがGINZA SIXでインスタ映えするライブを行う"
  );
  console.log(result);
}

main().catch(console.error);

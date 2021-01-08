const Mecab = require("mecab-async");

function createMeCab() {
  const mecab = new Mecab();
  mecab.command = "mecab";
  mecab.pParse = (text) =>
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
  const mecab = createMeCab();
  const nodes = await mecab.pParse(
    "きゃりーぱみゅぱみゅがGINZA SIXでインスタ映えするライブを行う"
  );
  console.log(nodes);
}

main().catch(console.error);

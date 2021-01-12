const mecab = require("./mecab");

async function main() {
  const m = mecab().promise;
  const nodes = await m.parseFormat(
    "きゃりーぱみゅぱみゅがGINZA SIXでインスタ映えするライブを行う"
  );
  console.log(nodes);
}

main().catch(console.error);

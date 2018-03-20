const { sha256 } = require("crypto-hash");

async function main() {
  console.log(await sha256("sample plain text"));
}

main().catch(console.error);

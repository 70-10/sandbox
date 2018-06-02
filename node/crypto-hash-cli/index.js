#!/usr/bin/env node

const { sha256 } = require("crypto-hash");

async function main() {
  if (process.argv.length <= 2) {
    console.error("Requied Text.");
    process.exit(1);
  }

  const plaintext = process.argv[2];
  console.log(await sha256(plaintext));
  process.exit(0);
}

main().catch(console.error);

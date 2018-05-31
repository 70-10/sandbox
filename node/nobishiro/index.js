#!/usr/bin/env node

const path = require("path");
const termImg = require("term-img");
const terminalImage = require("terminal-image");

async function fallback() {
  const image = await terminalImage.file(path.join(__dirname, "nobishiro.jpg"));
  console.log(image);
}

async function main() {
  termImg(path.join(__dirname, "nobishiro.jpg"), { fallback });
}

main().catch(console.error);

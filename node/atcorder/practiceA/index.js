function logic(input) {
  const inputSplit = input.split("\n");
  const tmp = inputSplit[1].split(" ");
  const a = parseInt(inputSplit[0], 10);
  const b = parseInt(tmp[0], 10);
  const c = parseInt(tmp[1], 10);
  const s = inputSplit[2];
  return a + b + c + " " + s;
}
module.exports = logic;

function Main(input) {
  console.log(logic(input));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

function logic(input) {
  return [...input].filter(char => char === "1").length;
}
module.exports = logic;

function Main(input) {
  console.log(logic(input));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

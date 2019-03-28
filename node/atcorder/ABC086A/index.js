function logic(input) {
  const split = input.split(" ");
  const a = split[0];
  const b = split[1];

  return (a * b) % 2 === 0 ? "Even" : "Odd";
}
module.exports = logic;

function Main(input) {
  console.log(logic(input));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

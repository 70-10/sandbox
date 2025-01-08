import { bgWhite, red, yellow } from "@std/fmt/colors";
import { format } from "@std/fmt/duration";
import { format as byteFormat } from "@std/fmt/bytes";

// @std/fmt/colors
const text = bgWhite(`${yellow("Hello")}, ${red("world")}!`);

console.log(text);

// @std/fmt/duration
console.log(format(99674, {
  style: "full",
  ignoreZero: true,
}));

// @std/fmt/bytes
console.log(byteFormat((2 ** 10) ** 3, { binary: true })); // 1 GiB

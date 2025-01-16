import { Spinner } from "@std/cli/unstable-spinner";
import { parseArgs } from "@std/cli/parse-args";

const spinner = new Spinner({ message: "Loading...", color: "green" });
spinner.start();

setTimeout(() => {
  spinner.stop();
  console.log("Finished loading!");
}, 1000);

const result = parseArgs(["--foo", "--bar=baz", "./quux.txt"]);

console.log(result);

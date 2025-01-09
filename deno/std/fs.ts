import { copy, exists } from "@std/fs";

console.log(await exists("example.txt"));

await copy("example.txt", "example2.txt", { overwrite: true });

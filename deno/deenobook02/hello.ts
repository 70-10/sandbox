import * as flags from "https://deno.land/std@v0.17.0/flags/mod.ts";

type Flags = {
  h?: boolean;
  help?: boolean;
};

async function main() {
  const { h, help } = flags.parse(Deno.args) as Flags;
  if (h || help) {
    console.log("Usage: hello");
    return;
  }

  console.log("Hello, world!");
}

main().catch(console.error);

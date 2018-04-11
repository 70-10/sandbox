#!/usr/bin/env node

const program = require("commander");
const { init, validate } = require("../lib/actions");

program.version(require("../package").version).usage("<command> [options]");

program
  .command("init <template-name>")
  .description("generate a template")
  .action(init);

program
  .command("validate <stack-file>")
  .description("validate cloudformation stack template")
  .action(validate);

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

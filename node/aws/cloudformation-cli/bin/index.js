#!/usr/bin/env node

const program = require("commander");
const chalk = require("chalk");
const { init, validate } = require("../lib/actions");

program.version(require("../package").version).usage("<command> [options]");

program
  .command("init <template-name>")
  .description("generate a template")
  .action(init);

program.command("validate").action(() => {
  const template = require("../templates");
  validate(template).catch(outputError);
});

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

function outputError(err) {
  console.error(`${chalk.red(err.code)}: ${err.message}`);
}

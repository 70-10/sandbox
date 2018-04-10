#!/usr/bin/env node

const program = require("commander");
const chalk = require("chalk");
const { validate } = require("../lib/actions");

program.version(require("../package").version).usage("<command> [options]");

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

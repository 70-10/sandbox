#!/usr/bin/env node

const program = require("commander");
const { init, validate, deploy } = require("../lib/actions");

program.version(require("../package").version).usage("<command> [options]");

program
  .command("init <template-name>")
  .description("generate a template")
  .action(init);

program
  .command("validate [project-path]")
  .description("validate cloudformation stack template")
  .action(project_path => validate(project_path || "."));

program
  .command("deploy [project-path]")
  .description("Deploy CloudFormation stack")
  .action(project_path => deploy(project_path || "."));

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

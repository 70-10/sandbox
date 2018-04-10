const fs = require("fs");
const path = require("path");
const makeDir = require("make-dir");
const { promisify } = require("util");
const read = promisify(fs.readFile);
const write = promisify(fs.writeFile);
const chalk = require("chalk");
const mustache = require("mustache");

module.exports = (...args) => {
  init(...args).catch(err => {
    console.error(chalk.red(err));
    process.exit(1);
  });
};

async function init(...args) {
  const [name] = args;

  if (fs.existsSync(name)) {
    throw new Error(`${name} is exists.`);
  }

  await makeDir(`${name}/templates`);
  const templateMst = await read(path.resolve(__dirname, "template.mustache"), "utf8");
  console.log(templateMst);
  await write(`${name}/templates/index.js`, mustache.render(templateMst, { description: name }));
}

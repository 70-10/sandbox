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
  const templateMst = await read(path.resolve(__dirname, "templates", "template.mustache"), "utf8");
  const package = await read(path.join(__dirname, "templates", "package.json.mustache"), "utf8");
  const index = await read(path.join(__dirname, "templates", "index.mustache"), "utf8");
  await Promise.all([
    write(`${name}/templates/index.js`, mustache.render(templateMst, { description: name })),
    write(`${name}/package.json`, mustache.render(package, { name })),
    write(`${name}/index.js`, mustache.render(index)),
  ]);
}

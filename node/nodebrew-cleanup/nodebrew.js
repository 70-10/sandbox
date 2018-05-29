const execa = require("execa");

module.exports = {
  currentVersion,
  ls,
  uninstall,
  clean
};

async function currentVersion() {
  const { stdout } = await exec(["ls"]);
  return stdout
    .split("\n")
    .filter(s => s.includes("current"))[0]
    .split(" ")[1];
}

async function ls() {
  const { stdout } = await exec(["ls"]);
  return stdout.split("\n").filter(s => !s.includes("current") && s !== "");
}

async function uninstall(version) {
  const { stdout } = await exec(["uninstall", version]);
  return stdout;
}

async function clean(version) {
  const { stdout } = await exec(["clean", version]);
  return stdout;
}

async function exec(subcommands) {
  return execa("nodebrew", subcommands);
}

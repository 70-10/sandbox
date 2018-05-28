const execa = require("execa");

module.exports = {
  currentVersion,
  ls,
  uninstall,
  clean
};

async function currentVersion() {
  const { stdout } = await execa("nodebrew", ["ls"]);
  return stdout
    .split("\n")
    .filter(s => s.includes("current"))[0]
    .split(" ")[1];
}

async function ls() {
  const { stdout } = await execa("nodebrew", ["ls"]);
  return stdout.split("\n").filter(s => !s.includes("current") && s !== "");
}

async function uninstall(version) {
  const { stdout } = await execa("nodebrew", ["uninstall", version]);
  return stdout;
}

async function clean(version) {
  const { stdout } = await execa("nodebrew", ["clean", version]);
  return stdout;
}

const { currentVersion, uninstall, ls, clean } = require("./nodebrew");

async function main() {
  const current = await currentVersion();
  const versions = (await ls()).filter(v => v !== current);

  if (versions.length <= 0) {
    console.error("deleation target is not found.");
    return;
  }

  for (v of versions) {
    console.log(await uninstall(v));
  }
  console.log(await clean("all"));
}

main().catch(console.error);

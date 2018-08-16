const NatureRemo = require("nature-remo");

async function main() {
  const n = new NatureRemo.Cloud("<ACCESS TOKEN>");
  const devices = await n.getDevices();
  devices.forEach(d => {
    console.log(`name: ${d.name}`);
    console.log(
      `Tempareture: ${d.newest_events.te.val} (${
        d.newest_events.te.created_at
      })`
    );
    console.log(
      `HUmidity: ${d.newest_events.hu.val} (${d.newest_events.hu.created_at})`
    );
    console.log(
      `Illumination: ${d.newest_events.il.val} (${
        d.newest_events.il.created_at
      })`
    );
  });
}

main().catch(console.error);

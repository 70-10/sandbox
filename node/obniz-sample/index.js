const Obniz = require("obniz");

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function main() {
  const obniz = new Obniz("0000-0000");
  obniz.onconnect = async () => {
    obniz.display.clear();
    obniz.display.print("Hello World");

    var servo = obniz.wired("ServoMotor", { gnd: 0, vcc: 1, signal: 2 });

    servo.angle(0.0);
    await sleep(1000);
    servo.angle(90.0);
  };
}

main().catch(console.error);

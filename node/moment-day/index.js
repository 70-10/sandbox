const moment = require("moment");
moment.locale("ja", {
  weekdays: [
    "日曜日",
    "月曜日",
    "火曜日",
    "水曜日",
    "木曜日",
    "金曜日",
    "土曜日"
  ],
  weekdaysShort: ["日", "月", "火", "水", "木", "金", "土"]
});

async function main() {
  console.log(moment().format("ddd"));
  console.log(moment().format("dddd"));
}

main().catch(console.error);

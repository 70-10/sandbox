const moment = require("moment");
moment.locale("ja");
const { isHoliday } = require("japanese-holidays");

console.log(isHoliday(moment("20180108").toDate()))

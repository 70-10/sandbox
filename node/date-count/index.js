const moment = require("moment");

module.exports = date => {
  return {
    day: date.getDay(),
    count: Math.floor((date.getDate() - 1) / 7) + 1
  };
};

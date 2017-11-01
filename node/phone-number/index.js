const { parse, format, asYouType } = require("libphonenumber-js");

const phone_number_jp = parse("09012345678", "JP");
console.log(format(phone_number_jp, "International").replace(/\s+/g, ""));

const config = require("config");
const url = require("url");
require("cross-fetch");

module.exports = async () => {
  const res = await fetch(url.resolve(config.api, "users"));
  return {
    status: res.status,
    body: await res.json()
  };
};

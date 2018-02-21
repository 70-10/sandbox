const express = require("express");
const app = express();
const httpProxy = require("http-proxy");
const apiProxy = httpProxy.createProxyServer();

app.get("/hc", (req, res) => {
  res.send({ status: "OK", port: 3000 });
});
app.all("/*", (req, res) => {
  console.log("redirecting to port 3001");
  apiProxy.web(req, res, { target: "http://localhost:3001" });
});

module.exports = app.listen(3000, () => {
  console.log("port 3000");
});

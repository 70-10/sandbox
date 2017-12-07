const express = require("express");
const app = express();
const httpProxy = require("http-proxy");
const apiProxy = httpProxy.createProxyServer();

app.all("/app1*", (req, res) => {
  console.log("redirecting to port 3001");
  apiProxy.web(req, res, { target: "http://localhost:3001" });
});

module.exports = app.listen(3000);

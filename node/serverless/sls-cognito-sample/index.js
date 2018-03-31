const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/hc", (req, res) => {
  res.send({ status: "ok" });
});

app.get("/", (req, res) => {
  res.send({ message: "hello, world" });
});

module.exports.handler = serverless(app, {
  request: (req, event, context) => {
    req.context = event.requestContext;
  }
});

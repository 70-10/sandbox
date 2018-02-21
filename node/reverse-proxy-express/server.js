const express = require("express");
const app = express();

app.get("/app1", (req, res) => {
  res.send("Hello world");
});

module.exports = app.listen(3001, () => {
  console.log("port 3001");
});

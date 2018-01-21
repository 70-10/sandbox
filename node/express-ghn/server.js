const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const googlehome = require("google-home-notifier");

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  next();
});

app.post("/", async (req, res) => {
  const language = req.body.language;
  const message = req.body.message;
  if (!message) {
    res.status(400);
  }
  await notify(message, language);
  res.send({ status: "OK" });
});

async function main() {
  app.listen(port);
  console.log(`Server start: ${port}`);
}

function notify(message, language) {
  googlehome.device("Google-Home", language || "ja");
  return new Promise(resolve => googlehome.notify(message, resolve));
}

main().catch(console.error);

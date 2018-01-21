const ngrok = require("ngrok");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const googlehome = require("google-home-notifier");

const port = process.env.PORT || 3000;
let PublicURL = "";
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  next();
});

app.use(express.static("public"));

app.post("/", async (req, res) => {
  const language = req.body.language;
  const message = req.body.message;
  if (!message) {
    res.status(400);
  }
  await notify(message, language);
  res.send({ status: "OK" });
});

app.get("/play", async (req, res) => {
  const url = `${PublicURL}/omake1.mp3`;
  console.log(url);
  const result = await play(url);
  res.send({ status: "OK", result });
});

async function main() {
  app.listen(port, async () => {
    PublicURL = await ngrokConnect(port);
    console.log(`Server start: ${port}`);
    console.log(`ngrok: ${PublicURL}`);
  });
}

function notify(message, language) {
  googlehome.device("Google-Home", language || "ja");
  return new Promise(resolve => googlehome.notify(message, resolve));
}

function play(mp3Url) {
  googlehome.device("Google-Home", "ja");
  return new Promise(resolve => googlehome.play(mp3Url, resolve));
}

function ngrokConnect(port) {
  return new Promise((resolve, reject) => ngrok.connect(port, (err, url) => (err ? reject(err) : resolve(url))));
}

main().catch(console.error);

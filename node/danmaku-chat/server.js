const ngrok = require("ngrok");
const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.Server(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const count = {
  viewer: 0,
  all: 0,
  comment: 0,
};
let viewerCount = 0;
let commentCount = 0;
let allCount = 0;

app.set("view engine", "pug");
app.use("/static", express.static("public"));
app.get("/", (req, res) => res.render("index"));

io.on("connection", socket => {
  console.log(`a user connected`);

  count.viewer++;
  count.all++;
  io.emit("count", count);

  socket.on("disconnect", () => {
    console.log("user disconnected");
    count.viewer--;
    io.emit("count", count);
  });
  socket.on("chat message", async msg => {
    console.log(msg);
    // msg = {type: "string", message: "string"}
    io.emit("chat message", msg.message);
    count.comment++;
    io.emit("count", count);
  });
});

function ngrokConnect(port) {
  return new Promise((resolve, reject) => ngrok.connect(port, (err, url) => (err ? reject(err) : resolve(url))));
}

server.listen(port, async () => {
  const url = await ngrokConnect(port);
  console.log(`Server start: ${port}`);
  console.log(`ngrok: ${url}`);
});

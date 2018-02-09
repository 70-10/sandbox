const ngrok = require("ngrok");
const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.Server(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
let viewerCount = 0;
let commentCount = 0;
let allCount = 0;

app.set("view engine", "pug");
app.use("/static", express.static("public"));
app.get("/", (req, res) => res.render("index"));

io.on("connection", socket => {
  console.log(`a user connected`);

  viewerCount++;
  allCount++;
  console.log(viewerCount);
  io.emit("count", { viewer: viewerCount, all: allCount });
  io.emit("comment-count", commentCount);

  socket.on("disconnect", () => {
    console.log("user disconnected");
    viewerCount--;
    console.log(viewerCount);
    io.emit("count", { viewer: viewerCount, all: allCount });
  });
  socket.on("chat message", async msg => {
    console.log(msg);
    // msg = {type: "string", message: "string"}
    io.emit("chat message", msg.message);
    io.emit("comment-count", ++commentCount);
  });
});

function ngrokConnect(port) {
  return new Promise((resolve, reject) =>
    ngrok.connect(port, (err, url) => (err ? reject(err) : resolve(url)))
  );
}

server.listen(port, async () => {
  const url = await ngrokConnect(port);
  console.log(`Server start: ${port}`);
  console.log(`ngrok: ${url}`);
});

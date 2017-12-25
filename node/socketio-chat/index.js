const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const mecab = require("./lib/mecab");

const app = express();
const server = http.Server(app);
const io = socketio(server);

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

io.on("connection", socket => {
  console.log(`a user connected`);
  socket.broadcast.emit("hi");

  socket.on("disconnect", () => console.log("user disconnected"));
  socket.on("chat message", async msg => {
    io.emit("chat message", msg);
    const text = await mecab.pParse(msg);
    io.emit("chat message", text);
  });
});

server.listen(3000, () => {
  console.log("start: 3000");
});

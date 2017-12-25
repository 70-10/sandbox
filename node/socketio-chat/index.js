const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const mecab = require("./lib/mecab");
const client = require("socket.io-client");

const app = express();
const server = http.Server(app);
const io = socketio(server);

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post("/call", (req, res) => {
  const socket = client.connect("http://localhost:3000/");
  socket.on("connect", () => {
    console.log("caller connect");
    socket.emit("chat message", { type: "caller", message: "caller message" });
    socket.disconnect();
  });
  res.status(200).end();
});

io.on("connection", socket => {
  console.log(`a user connected`);
  socket.broadcast.emit("hi");

  socket.on("disconnect", () => console.log("user disconnected"));
  socket.on("chat message", async msg => {
    // msg = {type: "string", message: "string"}
    io.emit("chat message", msg.message);
    if (msg.type === "browser") {
      const text = await mecab.pParse(msg.message);
      io.emit("chat message", text);
    }
  });
});

server.listen(3000, () => {
  console.log("start: 3000");
});

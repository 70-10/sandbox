const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.Server(app);
const io = socketio(server);

const port = process.env.PORT || 3000;

app.use("/static", express.static("public"));
app.get("/", (req, res) => res.sendFile(`${__dirname}/index.html`));

io.on("connection", socket => {
  console.log(`a user connected`);
  socket.broadcast.emit("hi");

  socket.on("disconnect", () => console.log("user disconnected"));
  socket.on("chat message", async msg => {
    // msg = {type: "string", message: "string"}
    io.emit("chat message", msg.message);
  });
});

server.listen(port, () => {
  console.log(`start: ${port}`);
});

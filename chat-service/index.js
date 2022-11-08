const express = require("express");
const cors = require("cors");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); // config cors so that front-end can use
app.options("*", cors());

const httpServer = createServer(app);

httpServer.listen(8002);

const io = new Server(httpServer);

io.on("connection", (socket) => {
  const roomId = socket.handshake.query.roomId;
  socket.join(socket.handshake.query.roomId);
  socket.on("newmsg", (data) => {
    io.to(data.roomId).emit("msg2", data);
    // send this word out to all sockets connected to this one...
  });
  socket.on("disconnect", () => {
    io.to(roomId).emit("friendLeft"); // undefined
  });
});

io.listen(3003);

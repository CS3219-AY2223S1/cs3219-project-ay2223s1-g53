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
  socket.on("newmsg", (data) => {
    console.log(data);
    io.emit("msg2", data);
    // send this word out to all sockets connected to this one...
  });
});

io.listen(3003);

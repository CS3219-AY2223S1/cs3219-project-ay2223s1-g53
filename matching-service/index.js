const express = require("express");
const cors = require("cors");
const { createServer } = require("http");
const { Server } = require("socket.io");
const buildMatch = require('./build-match.js');


const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors()) // config cors so that front-end can use
app.options('*', cors())

const httpServer = createServer(app)

httpServer.listen(8001);

const io = new Server(httpServer);

io.on("connection", (socket) => {
    buildMatch(socket);
});

io.listen(3000);


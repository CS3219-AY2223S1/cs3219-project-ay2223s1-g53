const matchOrm = require("./match-orm.js");

const MATCH_TIMEOUT = 30 * 1000;

async function buildMatch(socket) {
  let incomingUsername;
  let emptyChecker = "";
  // manages abrupt disconnects
  socket.on("disconnect", () => {
    if (incomingUsername) {
      matchOrm.deleteExistingMatchByUsername(incomingUsername);
    }
  });

  socket.onAny(async (event, match) => {
    emptyChecker = "some connection";
    const incomingSocketId = socket.id;
    incomingUsername = match?.username;
    console.log(incomingSocketId);

    if (event == "match") {
      try {
        const incomingDifficulty = match.difficulty;
        // Look for match in db already with the same difficulty
        const existing = await matchOrm.getExistingMatchByDifficulty(
          incomingDifficulty,
          incomingSocketId
        );
        if (existing) {
          // There is an existing match entry with the same difficulty, generate roomId to both sockets and delete existing entry
          const roomId = existing.socketId + incomingSocketId;
          socket.emit("matchSuccess", roomId);
          socket.to(existing.socketId).emit("matchSuccess", roomId);
          matchOrm.deleteExistingMatchById(existing.socketId);
          return;
        } else {
          // There is no existing match entry with the same difficulty, so create a new entry and wait
          await matchOrm.createExistingMatch(
            incomingSocketId,
            incomingDifficulty,
            incomingUsername
          );
          socket.emit("matching");
          return;
        }
      } catch (e) {
        socket.emit("matchFail", e.message);
      }
    }

    if (event == "matchFail") {
      console.log("fialed");
      matchOrm.deleteExistingMatchByUsername(incomingUsername);
    }
  });
}

module.exports = buildMatch;

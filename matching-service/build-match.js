const matchOrm = require("./match-orm.js");

const MATCH_TIMEOUT = 30 * 1000;

async function buildMatch(socket) {
  socket.onAny(async (event, match) => {
    console.log(`got ${event}`);
    const incomingSocketId = socket.id;
    const incomingUsername = match.username;
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
          // There is an existing match entry with the same difficulty, notify both sockets and delete existing entry
          socket.emit("matchSuccess", existing.socketId);
          socket.to(existing.socketId).emit("matchSuccess", incomingSocketId);
          matchOrm.deleteExistingMatchById(existing.socketId);
          return;
        } else {
          // There is no existing match entry with the same difficulty, so create a new entry and wait
          await matchOrm.createExistingMatch(
            incomingSocketId,
            incomingDifficulty,
            incomingUsername
          );
          // Wait for timeout before failing
          socket.emit("matching");
          return;
        }
      } catch (e) {
        socket.emit("matchFail", e.message);
      }
    }

    if (event == "matchFail") {
      matchOrm.deleteExistingMatchByUsername(incomingUsername);
    }
  });
}

module.exports = buildMatch;

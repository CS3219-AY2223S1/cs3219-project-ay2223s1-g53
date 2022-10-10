const matchOrm = require("./match-orm.js");

const MATCH_TIMEOUT = 30 * 1000;

async function buildMatch(socket) {
  socket.on("match", async (match) => {
    try {
      const incomingDifficulty = match.difficulty;
      const incomingSocketId = socket.id;

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
          incomingDifficulty
        );
        // Wait for timeout before failing
        setTimeout(() => {
          if (matchOrm.getExistingMatchByDifficulty(incomingSocketId) != null) {
            matchOrm.deleteExistingMatchById(incomingSocketId);
            socket.emit("matchFail");
            return;
          }
        }, MATCH_TIMEOUT);
        socket.emit("matching");
        return;
      }
    } catch (e) {
      socket.emit("matchFail", e.message);
    }
  });
}

module.exports = buildMatch;

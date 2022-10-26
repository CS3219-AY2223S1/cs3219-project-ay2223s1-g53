const db = require("./models/index.js");
const sequelize = require("sequelize");

const RepositoryMatch = {
  getExistingByDifficulty: function (difficulty, id) {
    return db.Match.findOne({
      where: {
        difficulty: difficulty,
        socketId: {
          [sequelize.Op.not]: id,
        },
      },
    });
  },
  getExistingById: function (id) {
    return db.Match.findOne({
      where: { socketId: id },
    });
  },
  deleteExistingById: function (id) {
    return db.Match.destroy({
      where: { socketId: id },
    });
  },
  deleteExistingByUsername: function (username) {
    return db.Match.destroy({
      where: { username: username },
    });
  },
  createExisting: function (difficulty, id, username) {
    return db.Match.create({
      socketId: id,
      difficulty: difficulty,
      username: username,
    });
  },
};

module.exports = RepositoryMatch;

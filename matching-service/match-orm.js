const RepositoryMatch = require("./repository.js");

const OrmMatch = {
  getExistingMatchByDifficulty: function (difficulty, id) {
    return RepositoryMatch.getExistingByDifficulty(difficulty, id);
  },

  getExistingMatchById: async function (id) {
    return await RepositoryMatch.getExistingById(id);
  },

  createExistingMatch: async function (id, difficulty, username) {
    return await RepositoryMatch.createExisting(difficulty, id, username);
  },

  deleteExistingMatchById: async function (id) {
    return await RepositoryMatch.deleteExistingById(id);
  },

  deleteExistingMatchByUsername: async function (username) {
    return await RepositoryMatch.deleteExistingByUsername(username);
  },
};

module.exports = OrmMatch;

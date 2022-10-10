const RepositoryMatch = require("./repository.js");

const OrmMatch = {
  getExistingMatchByDifficulty: function (difficulty, id) {
    return RepositoryMatch.getExistingByDifficulty(difficulty, id);
  },

  getExistingMatchById: async function (id) {
    return await RepositoryMatch.getExistingById(id);
  },

  createExistingMatch: async function (id, difficulty) {
    return await RepositoryMatch.createExisting(difficulty, id);
  },

  deleteExistingMatchById: async function (id) {
    return await RepositoryMatch.deleteExistingById(id);
  },
};

module.exports = OrmMatch;

const RepositoryQuestion = require("./repository.js");

const OrmQuestion = {
  getRandomQuestionByDifficulty: async function (difficulty) {
    return await RepositoryQuestion.getRandomByDifficulty(difficulty);
  },

  getQuestionById: async function (id) {
    return await RepositoryQuestion.getById(id);
  }
};

module.exports = OrmQuestion;

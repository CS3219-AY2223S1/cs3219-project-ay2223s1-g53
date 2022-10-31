const RepositoryQuestion = require("./repository.js");

const OrmQuestion = {
  getRandomQuestionByDifficulty: async function (difficulty) {
    return await RepositoryQuestion.getRandomByDifficulty(difficulty);
  }
};

module.exports = OrmQuestion;

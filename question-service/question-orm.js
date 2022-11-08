const RepositoryQuestion = require("./repository.js");

const OrmQuestion = {
  getRandomQuestionByDifficulty: async function (difficulty, seed) {
    return await RepositoryQuestion.getRandomByDifficulty(difficulty, seed);
  },
};

module.exports = OrmQuestion;

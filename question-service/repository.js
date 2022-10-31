const db = require("./models/index.js");
const sequelize = require("sequelize");

const RepositoryQuestion = {
  getRandomByDifficulty: function (difficulty) {
    return db.Question.findAll({
      where: {
        difficulty: difficulty
      },
      order: db.sequelize.random(),
      limit: 1
    });
  }
};

module.exports = RepositoryQuestion;

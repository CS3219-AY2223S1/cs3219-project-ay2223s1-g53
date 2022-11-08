const db = require("./models/index.js");
const sequelize = require("sequelize");

const RepositoryQuestion = {
  getRandomByDifficulty: async function (difficulty, seed) {
    const res = await db.Question.findAll({
      where: {
        difficulty: difficulty,
      },
      order: [["id", "DESC"]],
    });
    console.log(res);
    const index = seed % res.length;
    return res[index];
  },
};

module.exports = RepositoryQuestion;

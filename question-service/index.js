const express = require("express");
const questionOrm = require("./question-orm.js");
const app = express();
const port = 3005;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", async (req, res) => {
  const difficulty = req.query.difficulty;
  const result = await questionOrm.getRandomQuestionByDifficulty(difficulty);
  res.json({
    "message":"success",
    "data":result
});
});

app.get("/find", async (req, res) => {
  const id = req.query.id;
  const result = await questionOrm.getQuestionById(id);
  res.json({
    "message":"success",
    "data":result
});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

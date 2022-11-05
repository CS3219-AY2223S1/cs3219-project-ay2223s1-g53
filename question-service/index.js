const express = require("express");
const questionOrm = require("./question-orm.js");
const app = express();
const port = 3005;
app.use(express.json());
const cors = require("cors");

app.use(cors()); // config cors so that front-end can use
app.options("*", cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", async (req, res) => {
  const difficulty = req.query.difficulty;
  const seed = req.query.seed;
  const result = await questionOrm.getRandomQuestionByDifficulty(
    difficulty,
    seed
  );
  res.json({
    message: "success",
    data: result,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

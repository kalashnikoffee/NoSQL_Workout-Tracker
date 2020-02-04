const path = require("path");
//is this line necessary for this?
const router = require("express").Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"), err => {
    if (err) throw err;
  });
});

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"), err => {
    if (err) throw err;
  });
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"), err => {
    if (err) throw err;
  });
});

//is this right?
//   router.get("/exercise?", (req, res) => {
//     res.sendFile(path.join(_dirname, "../public/exercise.html"));
//   })

module.exports = router;

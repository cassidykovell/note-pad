const router = require("express").Router();
const fs = require("fs");

router.get("/", (req, res) => {
  fs.readFile("./db.json", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

router.post("/", (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNotes = {
      title,
      text,
    };
   
  }
});

module.exports = router;

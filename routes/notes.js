const router = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

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
      id: uuidv4(),
    };
    fs.readFile('./db.json', (err, data) => {
        if (err) throw err;
        let oldNotes = JSON.parse(data);
        oldNotes.push(newNotes);
        fs.writeFile('./db.json', JSON.stringify(oldNotes), (err) => {
        if (err) throw err;  
        res.json('Note added!');
        })
    })
  }
});

module.exports = router;

const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001
const api = require('./routes');

//gets up an express server and defined routes for files
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

//gets the serving listening to the port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


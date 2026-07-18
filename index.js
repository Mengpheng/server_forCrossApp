const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/01", (req, res) => {
  res.send({
    name: "Hello",
  });
});

app.listen(PORT, () => {
  console.log(`Listen on https//localhost:${PORT}`);
});

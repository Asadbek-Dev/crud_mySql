const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Asadbek-Dev");
});

app.listen(3001, () => {
  console.log("Running");
});

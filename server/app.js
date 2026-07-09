const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/my-blog");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send();
});

app.use("/api/users", require("./routes/users"));
app.use("/api/blogs", require("./routes/blogs"));

module.exports = app;

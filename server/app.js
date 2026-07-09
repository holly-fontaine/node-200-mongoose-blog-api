const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(process.eng.MONGODB_URI || "mongodb://127.0.0.1/my-blog");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send();
});

app.use("/api/users", require("./routes/users"));
app.use("/api/blogs", require("./routes/blogs"));

module.exports = app;

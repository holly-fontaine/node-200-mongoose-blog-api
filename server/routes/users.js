const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", (req, res) => {
  User.find().then((users) => {
    res.status(200).json(users);
  });
});

router.get("/:id", (req, res) => {
  User.findById(req.params.id).then((user) => {
    if (!user) {
      return res.sendStatus(404);
    }
    res.status(200).json(user);
  });
});

router.post("/", (req, res) => {
  User.create(req.body).then((user) => {
    res.status(201).json(user);
  });
});

router.put("/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (user) => {
      res.status(204).json(user);
    },
  );
});

router.delete("/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id).then((user) => {
    res.sendStatus(200);
  });
});

module.exports = router;

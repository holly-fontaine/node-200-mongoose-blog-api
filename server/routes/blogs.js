const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

router.get("/", (req, res) => {
  Blog.find()
    .then((blogs) => {
      res.status(200).json(blogs);
    })
    .catch((err) => res.status(400).json({ error: err.message }));
});

router.get("/featured", (req, res) => {
  Blog.where("featured")
    .equals(true)
    .then((blogs) => {
      res.status(200).json(blogs);
    })
    .catch((err) => res.status(400).json({ error: err.message }));
});

router.get("/:id", (req, res) => {
  Blog.findById(req.params.id)
    .then((blog) => {
      if (!blog) {
        return res.sendStatus(404);
      }
      res.status(200).json(blog);
    })
    .catch((err) => res.status(400).json({ error: err.message }));
});

router.post("/", (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((saved) => res.status(201).json(blog))
    .catch((err) => res.status(400).json({ error: err.message }));
});

router.put("/:id", (req, res) => {
  Blog.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((blog) => res.status(204).json(blog))
    .catch((err) => res.status(400).json({ error: err.message }));
});

router.delete("/:id", (req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch((err) => res.status(400).json({ error: err.message }));
});
module.exports = router;

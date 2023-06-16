const express = require("express");
const router = express.Router();
const path = require('path');
const blogs = require('../data/blogs.js');

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../templates/index.html'));
});

router.get("/blog", (req, res) => {
  blogs.forEach(e => {
    console.log(e.title);
  });
  res.sendFile(path.join(__dirname, '../templates/bloghomepage.html'));
  });
  router.get("/blogpost/:slug", (req, res) => {
    console.log(req.params.slug);
   myBlog= blogs.filter((e) => {
      return e.slug === req.params.slug;
    });
    console.log(myBlog);
      res.sendFile(path.join(__dirname, '../templates/blogpost.html'));
   
  });

  // Handle Bars Engine 
module.exports = router;

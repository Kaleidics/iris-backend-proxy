const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const { getTopArticles } = require("../api/index");

router.get("/top-articles/:topic", jsonParser, (req, res) => {
  getTopArticles(req.params.topic).then((data) => {
    res.json(data.results);
  });
});

module.exports = { router };

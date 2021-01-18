const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const { getTopArticles } = require("../api/index");

router.get("/top-articles", jsonParser, (req, res) => {
  getTopArticles().then((data) => {
    res.json(data.results[0]);
  });
});

module.exports = { router };

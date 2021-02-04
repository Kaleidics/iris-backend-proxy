const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const { getArticlesTop, getArticlesPopular } = require("../api/index");

router.get("/top-articles/:topic", jsonParser, (req, res) => {
  getArticlesTop(req.params.topic).then((data) => {
    res.json(data.results);
  });
});

router.get("/most-popular/", jsonParser, (req, res) => {
  getArticlesPopular().then((data) => {
    res.json(data.results);
  });
});

module.exports = { router };

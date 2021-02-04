const fetch = require("node-fetch");
const { BASE_URL, NY_TIMES_API } = require("../config");

const getTopArticles = (section) => {
  const url =
    BASE_URL +
    "/svc/topstories/v2/" +
    section +
    ".json?api-key=" +
    NY_TIMES_API;

  return fetch(url)
    .then((res) => res.json())
    .then((response) => response);
};

module.exports = { getTopArticles };

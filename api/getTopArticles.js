const fetch = require("node-fetch");
const { BASE_URL, NY_TIMES_API } = require("../config");

const getTopArticles = () => {
  const url =
    BASE_URL + "/svc/mostpopular/v2/viewed/1.json?api-key=" + NY_TIMES_API;

  return fetch(url)
    .then((res) => res.json())
    .then((response) => response);
};

module.exports = { getTopArticles };

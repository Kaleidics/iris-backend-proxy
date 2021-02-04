require("dotenv").config();
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const { router: proxyRouter } = require("./proxy");
const { CORS_ACCESS, PORT } = require("./config");

const app = express();

//CORS
app.use(
  cors({
    origin: CORS_ACCESS,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/", proxyRouter);

app.use("/", (req, res) => {
  return res.status(200).json({ message: "Server is running" });
});

app.use("*", (req, res) => {
  return res.status(404).json({ message: "Not Found" });
});

app.listen(PORT || 8080, () => {
  console.log(`Your app is listening on port ${PORT || 8080}`);
});

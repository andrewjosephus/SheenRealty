const express = require("express");
const sendMail = require("./mail");

const log = console.log;
const app = express();
const path = require("path");
const router = express.Router();
const PORT = 8080;

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "aboutus.html"));
  //__dirname : It will resolve to your project folder.
});

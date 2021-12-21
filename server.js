const express = require("express");
const sendMail = require("./mail");

const log = console.log;
const app = express();
const path = require("path");
const router = express.Router();
const PORT = 8080;

// Configuring our data parsing
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.json());
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
  //__dirname : It will resolve to your project folder.
});
app.post("/email", (req, res) => {
  // res.sendFile(path.join(__dirname + '/contact-us.html'));
  //TODO
  //send email here
  const { name, subject, email, text } = req.body;
  console.log("Data: ", req.body);
  console.log("fag");

  sendMail(name, email, subject, text, function (err, data) {
    if (err) {
      res.status(500).json({ message: "Internal Error" });
    } else {
      res.status({ message: "Email sent!!!" });
    }
  });
  // res.json({ message: 'Message received!!!' })
});

app.listen(PORT, () => log("Server is starting on PORT,", PORT));

console.log("IT's working!");

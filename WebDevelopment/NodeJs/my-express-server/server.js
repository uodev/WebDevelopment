const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/contact", function (req, res) {
  res.send("Contact me at: uygaroztcyln@gmail.com");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Uygar and I am Web Dev.</p>");
});

app.get("/hobbies", function (req, res) {
  res.send("<ul><li>Coffee</li><li>Code</li><li>Beer</li></ul>");
});

app.listen(3000, () => console.log("Sunucu çalışıyor!"));

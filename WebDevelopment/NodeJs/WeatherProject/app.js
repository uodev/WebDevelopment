const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const query = req.body.cityName;
  const apiKey = "21b9a2df41d204afc5aabd8189f8c5f4";
  const unit = "metric";
  //OpenWeather api adress
  const URL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    apiKey +
    "&units=" +
    unit;
  https.get(URL, (response) => {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const desc = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      res.write(`<p>The weather is currently ${desc}</p>`);
      res.write(
        ` <h1>The temperature in ${query} is ${temp} degrees Celcius</h1>`
      );
      res.write(`<img src="${imageURL}" />`);
      res.send();
    });
  });
});

app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor!`));

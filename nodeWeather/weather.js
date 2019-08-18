const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

const apiKey = '930128ea3acae57f075066e90840cf01';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})

app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `https://samples.openweathermap.org/data/2.5/forecast?q=${city},us&mode=xml&appid=${apiKey}`;
})
console.log(`Its ${weather.temp} degrees in ${weather.name}!`);
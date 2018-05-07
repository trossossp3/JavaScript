let request = require('request');

let apiKey = 'aa238976feea9c38dbda717af9c1941c';
let city = 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});
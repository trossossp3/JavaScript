//require express and make instance of it
var express = require('express');
var app = express();
var pdf = require('pdf');
var http = require('html');

//on the request to root(localhost:3000/)
app.get('/', function (req, res) {
    res.send('<b>My</b> first express http server');
});

app.get('/hello', function (req, res) {
    res.render('index.ejs');
});

//change the 404 message
app.use(function (req, res, next) {
    res.status(404).send('sorry doesnt exsist');
});

//start the server at port 3000
app.listen(3000, function () {
    console.log("listening on 3000")

})
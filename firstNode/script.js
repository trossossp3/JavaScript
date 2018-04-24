var http = require('http');
var fs = require('fs');

//var dt = require('./myfirstmodule');
//res.write("The date and time are currently: " + dt.myDateTime());
http.createServer(function (req, res) {
    fs.readFile('index.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });

}).listen(8080);

// type locahost: with the number ex. 8080
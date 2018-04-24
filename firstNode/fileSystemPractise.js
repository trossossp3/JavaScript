var fs = require('fs');

fs.appendFile('mynewFile1.txt', 'Hello World!', function (err){
    if (err) throw err;
    console.log('saved');
});
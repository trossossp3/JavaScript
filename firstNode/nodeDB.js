var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : ,
    user     : config.user,
    password : config.pass,
    database : config.db,
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
  });

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

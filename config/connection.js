const mysql = require("mysql");

var connection;

if(process.env.JAWS_URL) {
    connection = mysql.createConnection(process.env.JAWS_URL);
} else {
    connection = mysql.createConnection({
       host: "localhost",
   
       // Your port; if not 3306
       port: 3306,
   
       // Your username
       user: "root",
   
       // Your password
       password: process.env.MYSQL_PASSWORD,
       database: "burgers_db"
   });

}

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
const mysql = require("mysql");

var conn;
  //connect to database
if(process.env.JAWSDB_URL) {
    conn = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    conn = mysql.createConnection({
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

conn.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + conn.threadId);
});

module.exports = conn;
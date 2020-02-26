const express = require("express");

//Calling express function as app
//setting PORT to whatever heroku calls if not 9000 localhost:
const app = express();
const PORT = process.env.PORT || 9000;

//Middleware handling all the data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var burger = require("./model/burger");
//Starts the server
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost: " + PORT);
    burger.selectAll();
});
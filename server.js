const express = require("express");

//Calling express function as app
//setting PORT to whatever heroku calls if not 8080 localhost:
const app = express();
const PORT = process.env.PORT || 8080;

//Middleware handling all the data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controller/burgers_controller");

app.use(routes);
//Starts the server
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
    
});
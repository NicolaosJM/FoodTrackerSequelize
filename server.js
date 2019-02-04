var express = require("express");
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/food_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
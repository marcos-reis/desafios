var express = require("express");
var routes = require("./routes");
var app = express();
app.use(express.json()) 
app.use(routes);

app.listen(3333); //the server object listens on port 8080

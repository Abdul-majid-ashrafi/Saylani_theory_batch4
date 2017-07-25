var express = require("express");
var path = require("path");
var http = require("http");
var logger = require("morgan");
var app = express();

app.use(logger("short"));

app.get("/", function (request, response) {
    response.end("Welcome to my homepage!");
});

app.get("/about", function (request, response) {
    response.end("Welcome to the about page!");
});

app.get("/weather", function (request, response) {
    response.end("The current weather is NICE.");
});

app.get("/hello/:who", function (request, response) {
    response.end("Hello, " + request.params.who + ".");
    // Fun fact: this has some security issues, which we’ll get to!
});

app.get("/redirect_anyWhere", function (request, response) {
    response.redirect("https://github.com/Abdul-majid-ashrafi/Saylani_theory_batch4/tree/master/Learn%20server");
});

app.get("/sendfile", function (request, response) {
    var filePath = path.resolve(__dirname, "exm/index.html");
    response.sendFile(filePath);
});
app.use(function (request, response) {
    response.statusCode = 404;
    response.end("404!");
});
http.createServer(app).listen(3000);

var express = require("express");
var http = require("http");
var path = require("path");
var app = express();

// app.set()//where and what
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", function (request, response) {
    response.render("index", {
        message: "Hey everyone! This is my webpage.",
        myName: "Ali Mughal",
        age: "30",
        post: 'Manager'
    });
});
http.createServer(app).listen(3000);

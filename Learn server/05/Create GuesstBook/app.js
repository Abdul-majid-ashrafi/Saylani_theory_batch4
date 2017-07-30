/* global __dirname */
var http = require("http");
var path = require("path");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json(), function (err, req, res, next) {
	if (err) {
		return res.status(500).json({ error: err });
	}
	next();
});
app.use(bodyParser.urlencoded({ extended: false }));



app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
var array = [];
app.locals.entries = array;



app.get("/", function (request, response) {
	response.render("index");
});
app.get("/new-entry", function (request, response) {
	response.render("new-entry");
});
app.get('/rest', function (request, response) {
	array = []

})
app.post("/new-entry", function (request, response) {
	array.push({
		title: request.body.title,
		content: request.body.content,
		published: new Date()
	});
	response.redirect("/");
});
app.use(function (request, response) {
	response.status(404).render("404");
});
http.createServer(app).listen(3000, function () {
	console.log("Guestbook app started on port 3000.");
});
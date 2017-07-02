// // Require Node's built-in HTTP module
// var http = require("http");

// //Define a function that'll handle incoming HTTP requests.
// function requestHandler(request, response) {
//     //     These request handler functions
//     // take two arguments: an object that represents the request (often
//     // shortened to req) and an object that represents the response (often shortened
//     // to res). The request object has things like the URL that the browser requested (did
//     // they request the homepage or the about page?), or the type of browser visiting
//     // your page
//     console.log("In comes a request to: " + request.url);
//     response.end("Hello, world!");
//     // if()
// }
// // Create a server that uses your function to handle requests
// var server = http.createServer(requestHandler);
// // Start the server listening on port 3000.
// server.listen(3000);





// var http = require("http");
// function requestHandler(request, response) {
//     console.log("In comes a request to: " + request.url);
//     if (request.url == "/") {
//         response.end("Hello, world!");
//     } else if (request.url === '/home') {
//         response.end("Hello, This is home page!");
//     } else if (request.url === '/about') {
//         response.end("Hello, render About page!");
//     } else {
//         response.end("<h1>404 not found!</h1>");
//     }
// }
// var server = http.createServer(requestHandler);
// server.listen(3000, function () {
//     console.log("Run server listening on port 3000")
//  });



// var http = require("http");
// var fileSystem = require('fs')
// function requestHandler(request, response) {
//     fileSystem.readFile('input.txt', function (err, data) {
//         if (err) {
//             console.log("Error", err)
//         }
//         response.end(data.toString());
//         // console.log(data)
//     })
// }
// var server = http.createServer(requestHandler);
// server.listen(3000, function () {
//     console.log("Run server listening on port 3000")
// });








//Require Express and put it in a variable.
// var express = require('express')
// var app = express()
// //Call express() to make a new Express 
// //application, and put it inside of a variable called “app”.
// // which returns a request handler function.
// //  like (http.createServer(requestHandler))
// //When someone hit / route they will be send hello world

// app.get('/', function (req, res) {
//     res.send("Hello World")
// })
// app.get('/home', function (req, res) {
//     res.send("Home page")
// })
// //Start the Express server on port 3000 and log that the server has started.
// app.listen(3000, function () {
//     console.log("Run server on port 3000")
// })

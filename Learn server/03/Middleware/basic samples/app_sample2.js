var express = require('express') // Import express module from node_modules
var http = require('http') // Import http module from node_modules
var app = express() // call express function which means return req.handlerFunction

app.use(function (request, response, next) {
    console.log("run middleware")
    next()
})

app.use(function (request, response,next) {
    console.log("run middleware2121121")
    next()
})

app.get('/', (request, response) => {
    response.send("helle world")
})

http.createServer(app).listen(3000);







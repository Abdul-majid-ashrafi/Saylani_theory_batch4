var express = require('express');
var bodyParser = require('body-parser');


var app = express();

// instruct the app to use the `bodyParser()`
//middleware for all routes
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// A browser's default method is 'GET', so this
// is the route that express uses when we visit
// our site initially.
app.get('/', function (req, res) {
  // The form's action is '/' and its method is 'POST',
  // so the `app.post('/', ...` route will receive the
  // result of our form
  var html = '<form action="/result" method="post" style="text-align:center">' +
    'Enter your name:' +
    '<input type="text" name="userName" placeholder="Write Your Name.."/>' +
    '<br>' + '<br>' +
    'Enter Your Age:' +
    '<input type="text" name="age" placeholder="What s your age."/>' +
    '<br>' +
    '<button type="submit">Submit</button>' +
    '</form>';

  res.send(html);
});

// This route receives the posted form.
// As explained above, usage of 'body-parser' means
// that `req.body` will be filled in with the form elements
app.post('/result', function (req, res) {
  console.log(req.body)
  var myName = req.body.userName;
  var myAge = req.body.age;
  var htmlName =
    'Hello: ' + myName + '.<br>' +
    '<br>' + 'Your Age Is: ' + myAge + '<br>' +
    '.<br>' + '<a href="/">Try again.</a>';
  res.send(htmlName);
});

// app.post('/todo', function (request, response) {
//   console.log(request.body)
//   response.send(request.body.name)
// })


app.listen(3000);
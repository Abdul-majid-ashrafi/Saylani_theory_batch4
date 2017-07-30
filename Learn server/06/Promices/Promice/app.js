var exp = require('express');
var myMod = require('./myModule')
var app = exp();

app.get('/', function (req, res) {
	myMod.myRandom()
		.then(function (random) {
			res.send('This is Your Number ' + random)
		})
	console.log('Run..')
}).listen(3000)
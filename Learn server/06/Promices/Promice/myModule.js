var q = require('q');

exports.myRandom = function () {

	var random = Math.random()
	var deferred = q.defer();

	setTimeout(function () {
		deferred.resolve(random)
	}, 3000);

	return deferred.promise
}
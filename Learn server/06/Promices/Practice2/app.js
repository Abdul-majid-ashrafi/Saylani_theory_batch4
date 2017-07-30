
// A promise is an abstraction for asynchronous programming.
//  It's an object that proxies for the return value or the 
//  exception thrown by a function that has to do some 
//  asynchronous processing


// The core idea behind promises is that a promise represents 
// the result of an asynchronous operation. A promise is in
//  one of three different states:

// pending - The initial state of a promise.
// fulfilled - The state of a promise representing a successful operation.
// rejected - The state of a promise representing a failed operation.

var q = require('q');
workLikeFirebase().then(function () {
	console.log("Calling resolve")
},
	// .catch(
		function () {
		console.log('Calling Reject..')
	})

function workLikeFirebase() {
	var deferred = q.defer();

	setTimeout(function () {
		// deferred.reject() //ERROR
		deferred.resolve() // SUCCESS
	}, 3000);

	return deferred.promise
}

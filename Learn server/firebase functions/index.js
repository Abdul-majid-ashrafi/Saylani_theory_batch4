const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase 123 !");
});
//
exports.authFunction = functions.https.onRequest((request, response) => {
    var obj = {
        name: "Majid",//request.body.name,
        email: "ex@gmail.com"//request.body.email
    }
    response.send(obj);
});

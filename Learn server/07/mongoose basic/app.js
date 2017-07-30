var mongoose = require('mongoose');

mongoose.connect('', {
    useMongoClient: true
    /* other options */
});


var userSchema = mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true }
})

var userModel = mongoose.model("User", userSchema)

var users = new userModel({ name: 'Haider', email: "haidere@gmail.com" });

users.save(function (err, data) {
    if (!err) {
        console.log("RESponSE ", data)
    } else {
        console.log("ERROR", err)
    }
})





// When successfully connected
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ');
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

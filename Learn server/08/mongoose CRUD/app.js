var mongoose = require('mongoose');

mongoose.connect('', {
    useMongoClient: true
    /* other options */
});


var userSchema = mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    number: Number
})

var userModel = mongoose.model("User", userSchema)

// save user 

// var users = new userModel({ number: 12345, name: 'Mughal', email: "mughal@gmail.com" });
// users.save(function (err, data) {
//     if (!err) {
//         console.log("RESponSE ", data)
//     } else {
//         console.log("ERROR", err)
//     }
// })



// Find data

// userModel.where({name : "Ali",email : 'Ali@gmail.com'}).findOne(function (err, user) {
//     if (err) return handleError(err);
//     if (user) {
//         console.log(user)
//         // doc may be null if no document matched
//     }
// });


// Update data

// userModel.where({name : "Ali"}).update({email : "mughal12345@gmail.com"},function (err, user) {
//     if (err) return handleError(err);
//     if (user) {
//         console.log(user)
//         // doc may be null if no document matched
//     }
// });



// find and delete

// userModel.findOne({ name: "Ali" }, function (err, user) {
//     if (err) return handleError(err);
//     if (user) {
//         user.remove(function (err, removed) {
//             if (!err) {
//                 console.log("Remove Item", removed)
//             } else {
//                 console.log("Error", err)
//             }
//         })
//         console.log(user)
//         // doc may be null if no document matched
//     }
// });





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

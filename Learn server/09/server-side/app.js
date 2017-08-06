var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');

// Setup server
var app = express();


// Parsers for POST data
app.use(bodyParser.json(), function (err, req, res, next) {
    if (err) {
        return res.status(500).json({ error: err });
    }
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));



//================ User Schema start ==============
mongoose.connect('mongodb://saylanibatch4:saylanibatch4@ds127883.mlab.com:27883/saylani_batch_4', {
    useMongoClient: true
    /* other options */
});
var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, lowercase: true },
    number: { type: Number }
})
// user model
var userModel = mongoose.model("User", userSchema)
//================ User Schema End ==============


// =======Create User Signup API Start========= 
// app.use('Access-Control-Allow-Origin','*');
app.post('/CREATEUSER', function (request, response) {
    response.header('Access-Control-Allow-Origin', "*");

    // response.setHeader('Access-Control-Allow-Origin', '*')
    var userObj = {
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        password: request.body.password,
        number: request.body.number
    }
    var saveData = new userModel(userObj)
    saveData.save(function (err, data) {
        if (!err) {
            console.log("data", data)
            response.send(data)
        } else {
            console.log("Err", err)
            response.send(err)
        }
    })
})
// =======Create User Signup API End========= 

// =======Create User login API Start========= 

app.post("/LOGINUSER", function (request, response) {
    userModel.findOne({ email: request.body.email }, function (err, user) {
        if (err) {
            console.log(err)
            response.send(err)
        }
        else {
            console.log(user)
            response.send(user)
        }
    });
})

// =======Create User login API End========= 







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

app.listen(3000, function () {
    console.log("Server run on port 3000")
});
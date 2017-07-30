//Without promise function run karne k liye..

// A promise is an abstraction for asynchronous programming.
//  It's an object that proxies for the return value or the 
//  exception thrown by a function that has to do some 
//  asynchronous processing

var result = "zero"
console.log(result)
functions();
console.log(result = 'Third')

function functions() {
    console.log(result = 'Second');
    setTimeout(myFunc, 4000)
}

function myFunc() {
    console.log('This is my Function.. ')
}


// var marks = [ 20,100,70]
// console.log(marks)
// tymout(totalMark)

// function tymout(calls){
//     setTimeout(function(){calls()},5000)
// }

// function totalMark(){
//     var total = 0;
//     marks.forEach(function(sign){
//         total += sign
//     })
//     console.log('Student Total Marks.. ' +total)
// };
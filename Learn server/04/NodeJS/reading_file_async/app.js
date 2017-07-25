var fs = require("fs");
fs.readFile("myfile.txt", function (err, data) {
    if (err) {
        console.error("Error reading file!");
        return;
    }
    console.log(data.match(/x/gi).length + " letter X's");
});
console.log("Hello world!");

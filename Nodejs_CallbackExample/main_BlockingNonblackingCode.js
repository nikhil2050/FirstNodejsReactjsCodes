var fs = require("fs");

// Blocking Code
console.log("BLOCKING Code");
var data = fs.readFileSync('Nodejs_CallbackExample/input.txt');
console.log(data.toString());

// NON-Blocking Code
console.log("\nNON-BLOCKING Code");
fs.readFile('Nodejs_CallbackExample/input.txt', function(err,data) {
    if(err) 
        return console.error("Some err :: "+err)
    console.log(data.toString());
});


console.log("Program ended");

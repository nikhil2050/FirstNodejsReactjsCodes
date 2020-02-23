var fs = require("fs")
var data = '';

var readerStream = fs.createReadStream("Nodejs_StreamsExample/input.txt");
readerStream.setEncoding("utf-8");

readerStream.on("data", function(chunk){
    console.log("Chunk :: "+chunk);
    data += chunk;
});

readerStream.on("end", function(){
    console.log("Data :: "+data);
});

readerStream.on("error", function(err){
    console.error("Error :: "+err);
});

console.log("Program ended.");

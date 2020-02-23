var fs = require("fs");
var data = 'Write this data : Simple Easy learning';

var writerStream = fs.createWriteStream('Nodejs_StreamsExample/output.txt');
writerStream.write(data, 'utf-8');
writerStream.end();

writerStream.on("finish", function(){
    console.log("Written.")
});

writerStream.on("error", function(err){
    console.error(err.stack());
});

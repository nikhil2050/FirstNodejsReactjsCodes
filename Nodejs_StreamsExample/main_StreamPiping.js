/*
 * Piping is a mechanism wher we provide outut of a stream to input of another stream
 * Usage : Reading from a file and Writing to another file
 */
var fs = require("fs");

var readerStream = fs.createReadStream('Nodejs_StreamsExample/input.txt');
var writerStream = fs.createWriteStream('Nodejs_StreamsExample/outputPiped.txt');
readerStream.pipe(writerStream);

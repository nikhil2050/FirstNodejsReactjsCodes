console.log("__dirname :: "+ __dirname);
console.log("__filename :: "+ __filename);

// Timer
function printHello(){
    console.log("Hello world");
}
var t = setTimeout(printHello, 2000);
clearTimeout(t);

setInterval(printHello, 2000);
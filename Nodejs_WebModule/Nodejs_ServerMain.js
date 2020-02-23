// 1. Import required module
var http = require("http");

// 2. Create server
http.createServer(function (request, response){
	// Send http header
	// HTTP Status : 200 : OK
	// ContentType: text/plain
	response.writeHead(200, {'Content-Type':'text/plain'})
	
	// Send response body as "Hello world"
	response.end('Hello world\n')
}).listen(8081);

// Console will print
console.log('Server running at http://127.0.0.1:8081');

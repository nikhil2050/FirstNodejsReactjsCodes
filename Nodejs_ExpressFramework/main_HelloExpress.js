var express = require("express");
var app = express();

app.use(express.static(__dirname+'/resources'))

app.get('/', function(req, resp){
    resp.send('Hello world.');
});

app.get('/process', function(req, resp){
    var resp_json = {
        first_name : req.query.first_name,
        last_name : req.query.last_name
    };
    console.log(resp_json);
    resp.end(JSON.stringify(resp_json));
});

var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port

    console.log("App listening for http://%s:%s ", host, port);
});
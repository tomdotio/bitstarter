var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

var as_buf = fs.readFileSync('index.html','uft-8');
var as_str = as_buf.toString();


app.get('/', function(request, response) {
	
	response.send(as_str);

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

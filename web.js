var fs = require('fs')
var buffer = new Buffer(fs.readFileSync('index.html'));
var responseString = buffer.toString('utf8');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(responseString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

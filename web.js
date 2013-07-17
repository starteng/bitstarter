var fs = require('fs')
var buffer = new Buffer();
var responseString = buffer.toString('utf8', fs.readFileSync('index.html');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(responseString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

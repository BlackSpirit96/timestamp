var express = require('express');
var app = express();
var port = 8080;

app.get('/', function (req, res) {
  res.send('Hello Timestamp!');
});

app.get('/:timestamp', function(req, res) {
  var dateUnix = new Date(parseInt(req.params.timestamp) * 1000);
  var dateStr = new Date(req.params.timestamp);
  console.log(dateStr);
});

app.listen(port, function () {
  console.log('Example app listening on port 8080!');
});

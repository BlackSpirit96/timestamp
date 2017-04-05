var express = require('express');
var moment = require('moment');
var app = express();
var port = 8080;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/:timestamp', function(req, res) {
  var obj = { unix: null, natural: null };
  var format = 'MMMM D, YYYY';
  var timestamp = req.params.timestamp;
  var unix = moment.unix(timestamp);
  var date = moment(timestamp, format);
  if (unix.isValid()) {
    obj.unix = unix.unix();
    obj.natural = unix.format(format);
  } else if (date.isValid()) {
    obj.unix = date.unix();
    obj.natural = date.format(format);
  }
  
  res.send(obj);
});

app.listen(port, function () {
  console.log('Timestamp app listening on port ' + port + '!');
});

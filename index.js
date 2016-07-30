var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var words = require("./words.js");

app.use("/assets",express.static('assets'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  var color = (function() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  })();

  socket.on('_message', function(msg) {
    msg = words.replace(msg);
    io.emit('_message', msg + "###" + color);
  });
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});

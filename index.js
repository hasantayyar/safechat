var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var words = require("./words.js");

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  socket.on('_message', function(msg) {
    io.emit('_message', msg);
  });
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});

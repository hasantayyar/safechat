var socket = io();
$(function() {
  $("#enter").click(function() {
    $("#chat").slideDown("fast");
    $("#container").slideUp("fast");
  });

  $('form').submit(function() {
    socket.emit('_message', $('#message').val());
    $('#message').val('');
    return false;
  });

  socket.on('_message', function(msg) {
    msg = msg.split("###");
    console.log("raw message", msg);
    $("#chat").css("background-color", "#de99de");
    setTimeout(function() {
      $("#chat").css("background-color", "#fff");
    }, 200)
    $('#messages').append($('<p style="border-color:' + msg[1] + '">').text(msg[0]));
  });

});

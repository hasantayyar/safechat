var chai = require('chai'),
    mocha = require('mocha'),
    should = chai.should();

var io = require('socket.io-client');

describe("test", function () {

    var server,
        options ={
            transports: ['websocket'],
            'force new connection': true
        };

    beforeEach(function (done) {
        // start the server
        server = require('../index').server;

        done();
    });

    it("echos message", function (done) {
        var client = io.connect("http://localhost:3000", options);

        client.once("connect", function () {
            client.once("_message", function (message) {
                message.should.contain("Hello World");

                client.disconnect();
                done();
            });

            client.emit("_message", "Hello World");
        });
    });

});

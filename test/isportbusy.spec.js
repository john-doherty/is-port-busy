'use strict';

var http = require('http');
var isPortBusy = require('../');
var server = null;
var port = 8888;

describe('isPortBusy', function () {

    beforeEach(function (done) {
        server = http.createServer();
        server.listen(port, done);
    });

    it('should be defined', function () {
        expect(isPortBusy).toBeDefined();
    });

    it('should execute .then when port is busy', function (done) {
        isPortBusy(port).then(done);
    });

    it('should execute .catch when port is free', function (done) {
        isPortBusy(8081).catch(function(){
            done();
        });
    });

    afterEach(function (done) {
        server.close(done);
    });
});
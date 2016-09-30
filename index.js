'use strict';

var net = require('net')

module.exports = function (port, fn) {

    return new Promise(function(resolve, reject) {

        var server = net.createServer();

        // resolve if port in use (as we're checking if it's busy)
        server.once('error', function (err) {

            if (err.code === 'EADDRINUSE') {
                resolve();
            }
        });

        // resolve is no errors (as port is free)
        server.once('listening', function () {

            server.once('close', function () {
                reject(port);
            });
            
            server.close();
        });

        server.listen(port);
    });

};
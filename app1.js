'use strict';

var http    = require('http');
var express = require('express');
var fs      = require('fs');
var path    = require('path');
var socket  = require('socket.io');

var port         = 5000;
var utf8         = { encoding: 'utf8' };
var serverConfig = express();
var server       = http.createServer(serverConfig);

var manager = socket.listen(server);

function exitProcess() {
  process.exit();
}

function onStart() {
  console.log('Server running on port ' + port + '.');
}

serverConfig.use(express.static(path.join(__dirname, 'public')));

process.on('SIGINT',  exitProcess);
process.on('SIGTERM', exitProcess);

server.listen(port, onStart);

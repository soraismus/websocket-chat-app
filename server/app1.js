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

// Creating a manager should build static 'socket.io-client' files.
var manager = socket.listen(server);

function exitProcess() {
  process.exit();
}

function onStart() {
  console.log('Server running on port ' + port + '.');
}

//var webpage = fs.readFileSync('./server/public/index.html', utf8);

/*
serverConfig.use(
  express.static(
    path.join(__dirname, 'public'),
    { index: webpage }));
*/

//serverConfig.get('/', function (req, res) { res.send(webpage); });

serverConfig.use(express.static(path.join(__dirname, 'public')));

process.on('SIGINT',  exitProcess);
process.on('SIGTERM', exitProcess);

serverConfig.listen(port, onStart);

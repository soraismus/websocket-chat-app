'use strict';

var http    = require('http');
var express = require('express');
var fs      = require('fs');
var path    = require('path');
var socket  = require('socket.io');

var port    = 5000;
var utf8    = { encoding: 'utf8' };
var app     = express();
var server  = http.createServer(app);
var manager = socket.listen(server);

function exitProcess() {
  process.exit();
}

function onStart() {
  console.log('Server running on port ' + port + '.');
}

var webpage = fs.readFileSync('./server/public/index.html', utf8);

var app = express();

app.use(express.static(path.join(__dirname, 'public'), { index: webpage }));

app.get('/', function (req, res) { res.send(webpage); });

process.on('SIGINT',  exitProcess);
process.on('SIGTERM', exitProcess);

app.listen(port, onStart);

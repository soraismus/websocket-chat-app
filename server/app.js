'use strict';

var http              = require('http');
var express           = require('express');
var configRoutes      = require('./lib/configRoutes');
var connectChatModule = require('./lib/connectChatModule');
var expressApp        = express();
var httpServer        = http.createServer(expressApp);
var getDataStore      = require('./getDataStore');

// ------------------------------------------------------------------------
var fs        = require('fs');
var mongodb   = require('mongodb');
var JSV       = require('JSV').JSV;
var cache     = require('./cache');
var validator = JSV.createEnvironment();
var schemas   = { 'user' : {} };

var mongoServer = new mongodb.Server(
    'localhost',
    mongodb.Connection.DEFAULT_PORT);

var dbHandle = new mongodb.Db(
    'spa',
    mongoServer,
    { safe : true });

var makeId = mongodb.ObjectID;

var getDataStore = require('./lib/getDataStore');
var dataStore = getDataStore(dbHandle, schemas, makeId, cache, validator);

function clearIsOnline() {
  dataStore.update(
    'user',
    { is_online : true  },
    { is_online : false },
    function (response) {
      console.log('All users set to offline', response);
    }
  );
}

function loadSchema(schemaName, schemaPath) {
  fs.readFile(schemaPath, 'utf8', function (err, data) {
    schemas[schemaName] = JSON.parse(data);
  });
}

dbHandle.open(function () {
  console.log('** Connected to MongoDB **');
  clearIsOnline();
});

for (var schemaName in schemas) {
  if (schemas.hasOwnProperty(schemaName)) {
    var schemaPath = __dirname + '/' + schemaName + '.json';
    loadSchema(schemaName, schemaPath);
  }
}
// ------------------------------------------------------------------------
















var makeId = dataStore.makeMongoId;

expressApp.configure(function () {
  expressApp.use(express.bodyParser());
  expressApp.use(express.methodOverride());
  expressApp.use(express.static(__dirname + '/public'));
  expressApp.use(expressApp.router);
});

expressApp.configure('development', function () {
  expressApp.use(express.logger());
  expressApp.use(express.errorHandler({
    dumpExceptions : true,
    showStack      : true
  }));
});

expressApp.configure('production', function () {
  expressApp.use(express.errorHandler());
});

configRoutes(expressApp, dataStore, makeId);
connectChatModule(httpServer);

httpServer.listen(3000);

console.log(
  'Express httpServer listening on port %d in %s mode',
   httpServer.address().port,
   expressApp.settings.env
);

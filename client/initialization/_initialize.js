'use strict';
var initialize = require('./initialize');
initialize({ nodeId: 'spa' });

var socketClient = require('socket.io-client');
if (!!socketClient) { console.log('SOCKET CLIENT'); }

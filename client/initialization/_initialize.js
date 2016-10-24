'use strict';
var initialize = require('./initialize');

var PacketState = {
  CHAT_CONNECTION : 'chat-connection',
  DEPARTURE_ALERT : 'departure-alert',
  ME              : 'me',
  MESSAGE         : 'message'
};

var packets = [];
packets.push({ type: PacketState.CHAT_CONNECTION, userName: 'CharlesV'                                 });
packets.push({ type: PacketState.MESSAGE,         userName: 'CharlesV',  message: "Hello, world."      });
packets.push({ type: PacketState.ME,              userName: 'HenryVIII', message: "Hello, world."      });
packets.push({ type: PacketState.MESSAGE,         userName: 'CharlesV',  message: "Guten tag, Welt."   });
packets.push({ type: PacketState.ME,              userName: 'HenryVIII', message: "Bonjour, le monde." });
packets.push({ type: PacketState.MESSAGE,         userName: 'CharlesV',  message: "Bonjour, le monde." });

var users = [];
users.push({ id: 0, name: 'TheFonze'   });
users.push({ id: 1, name: 'RalphNader' });
users.push({ id: 2, name: 'DarthVader' });

var chatConsoleState = 'open';

var config = {
  chatConsoleState : chatConsoleState,
  nodeId           : 'spa',
  packets          : packets,
  users            : users
};

initialize(config);

var socketClient = require('socket.io-client');
if (!!socketClient) { console.log('SOCKET CLIENT'); }

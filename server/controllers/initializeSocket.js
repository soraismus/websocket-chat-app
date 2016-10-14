'use strict';

// I'm not sure whether `server` refers to an express server or an http server.
function initializeSocket(server, configureChatNamespaceSocket) {
  var socket = require('socket.io');
  var manager = socket.listen(server);

  function addAuser(user) {}
  function updateChat(chat) {}
  function leaveChat() {}
  function disconnect() {}
  function updateAvatar(avatar) {}

  var chatNamespace = manager.set('blacklist', []).of('/chat');

  // socket.io namespaces inherit from `process.EventEmitter`.
  /*
  chatNamespace
    .on('connection', function (socket) {
      socket.on('adduser',      addUser     );
      socket.on('updatechat',   updateChat  );
      socket.on('leavechat',    leaveChat   );
      socket.on('disconnect',   disconnect  );
      socket.on('updateavatar', updateAvatar);
    });
  */
  chatNamespace.on('connection', configureChatNamespaceSocket);

  return manager;
}

module.exports = initializeSocket;

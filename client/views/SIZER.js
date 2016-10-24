var createComponent     = require('./ribosome/createComponent');
var _createDivComponent = require('./ribosome/_createDivComponent');
var DIV                 = require('./ribosome/elements').DIV;
var SUBMIT              = require('./ribosome/SUBMIT');
var TEXT                = require('./ribosome/TEXT');

var BOX      = _createDivComponent('spa-chat-list-box');
var LIST     = _createDivComponent('spa-chat-list');
var NOTE     = _createDivComponent('spa-chat-list-note');
var MSG      = _createDivComponent('spa-chat-msg');
var MSG_LOG  = _createDivComponent('spa-chat-msg-log');
var MSG_IN   = _createDivComponent('spa-chat-msg-in');
var MSG_FORM = createComponent('form', 'spa-chat-msg-form');
var MSG_SEND = _createDivComponent('spa-chat-msg-send');

var PacketState = {
  CHAT_CONNECTION : 'chat-connection',
  DEPARTURE_ALERT : 'departure-alert',
  ME              : 'me',
  MESSAGE         : 'message'
};

var getListName = function (user, selected) {
  var classes = selected
    ? {
        'spa-chat-list-name' : true,
        'spa-x-select'       : true
      }
    : { 'spa-chat-list-name': true };

  return DIV(
    {
      classes    : classes,
      attributes : { 'data-id': user.id }
    },
    user.name);
};

var getMessage = function (packet) {
  switch (packet.type) {
    case PacketState.CHAT_CONNECTION:
      return DIV(
        { classes: { 'spa-chat-msg-log-alert': true }},
        'Now chatting with ' + packet.userName);
    case PacketState.ME:
      return DIV(
        { classes: { 'spa-chat-msg-log-me': true }},
        packet.userName + ': ' + packet.message);
    case PacketState.MESSAGE:
      return DIV(
        { classes: { 'spa-chat-msg-log-msg': true }},
        packet.userName + ': ' + packet.message);
    case PacketState.DEPARTURE_ALERT:
      return DIV(
        { classes: { 'spa-chat-msg-log-alert': true }},
        packet.userName + ' has left the chat');
    default:
      throw new Error('invalid message state');
  }
}

var SIZER = function (config) {
  var packets = config.packets;
  var users = config.users;

  return DIV(
    {
      classes : { 'spa-chat-sizer': true },
      style   : { height: '216.216217041016px' }
    },
    LIST(
      BOX(
        users.length === 0
          ? NOTE('To chat alone is the fate of all greate souls...\n\nNo one is online.')
          : users.map(function (user, index) { return getListName(user, index === 0); }))),
    MSG(
      MSG_LOG(
        packets.map(getMessage)),
      MSG_IN(
        MSG_FORM(
          null,
          TEXT(),
          SUBMIT({ style: { display: 'none' }}),
          MSG_SEND('send')))));
};

module.exports = SIZER;

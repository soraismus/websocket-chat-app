var createComponent     = require('./ribosome/createComponent');
var _createDivComponent = require('./ribosome/_createDivComponent');
var DIV                 = require('./ribosome/elements').DIV;
var H1                  = require('./ribosome/elements').H1;
var P                   = require('./ribosome/elements').P;
var TEXT                = require('./ribosome/TEXT');
var SUBMIT              = require('./ribosome/SUBMIT');

var SHELL_HEAD = _createDivComponent('spa-shell-head');
var ACCOUNT = _createDivComponent('spa-shell-head-acct');
var LOGO    = _createDivComponent('spa-shell-head-logo');
var MAIN    = _createDivComponent('spa-shell-main');
var NAV     = _createDivComponent('spa-shell-main-nav');
var CONTENT = _createDivComponent('spa-shell-main-content');
var FOOT    = _createDivComponent('spa-shell-foot');
var MODAL   = _createDivComponent('spa-shell-modal');

var CHAT      = _createDivComponent('spa-chat');
var CHAT_HEAD = _createDivComponent('spa-chat-head');
var TOGGLE = _createDivComponent('spa-chat-head-toggle');
var TITLE  = _createDivComponent('spa-chat-head-title');
var CLOSER = _createDivComponent('spa-chat-closer');
var LIST   = _createDivComponent('spa-chat-list');
var BOX    = _createDivComponent('spa-chat-list-box');
var NOTE   = _createDivComponent('spa-chat-list-note');
var MSG    = _createDivComponent('spa-chat-msg');
var MSG_LOG = _createDivComponent('spa-chat-msg-log');
var MSG_IN  = _createDivComponent('spa-chat-msg-in');

//var SIZER = _createDivComponent('spa-chat-sizer');

var MSG_FORM = createComponent('form', 'spa-chat-msg-form');
var MSG_SEND = _createDivComponent('spa-chat-msg-send');

// slider
//   openTime        : 250 /* ms */
//   closeTime       : 250 /* ms */
//   openTitle       : 'Tap to close'
//   closeTitle      : 'Tap to open'
//   openMinHeight   : 10 /* em */
//   windowMinHeight : 20 /* em */

// chatConsole
//   state : 'closed' /* | 'opened' | 'hidden' */

// toggle_text : '+' /* | '=' */

// px_per_em        : 0
// slider_hidden_px : 0
// slider_closed_px : 0
// slider_opened_px : 0

var OPEN   = 'open';
var CLOSED = 'closed';
var HIDDEN = 'hidden';

function getSliderHeight(state) {
  switch (state) {
    case OPEN: return openHeight;
    case HIDDEN: return 0;
    case CLOSED: return closedHeight;
    default: throw new Error('invalid slider state');
  }
}

function getAnimationTime(state) {
  switch (state) {
    case OPEN: return openTime;
    case HIDDEN: return openTime;
    case CLOSED: return closedTime;
    default: throw new Error('invalid slider state');
  }
}

function getSliderTitle(state) {
  switch (state) {
    case OPEN: return openTitle;
    case HIDDEN: return '';
    case CLOSED: return closedTitle;
    default: throw new Error('invalid slider state');
  }
}

function getSliderGlyph(state) {
  switch (state) {
    case OPEN: return '=';
    case HIDDEN: return '+';
    case CLOSED: return '+';
    default: throw new Error('invalid slider state');
  }
}

function getListName(user) {
  return DIV(
    {
      classes : 'spa-chat-list-name',
      attributes : { 'data-id': user.id }
    },
    user.name);
}

var CHAT_CONNECTION = 'chat-connection';
var DEPARTURE_ALERT = 'departure-alert';
var ME = 'me';
var MESSAGE = 'message';

function getMessage(value) {
  switch (value.type) {
    case CHAT_CONNECTION:
      return DIV(
        { classes: 'spa-chat-msg-log-alert' },
        'Now chatting with ' + value.user);
    case ME:
      return DIV(
        { classes: 'spa-chat-msg-log-me' },
        value.user + ': ' + value.message);
    case MESSAGE:
      return DIV(
        { classes: 'spa-chat-msg-log-msg' },
        value.user + ': ' + value.message);
    case DEPARTURE_ALERT:
      return DIV(
        { classes: 'spa-chat-msg-log-alert' },
        value.user + 'has left the chat');
    default:
      throw new Error('invalid message state');
  }
}

function createChatConsole(config) {
  //var chatConnectionMaybe = config.chatConnectionMaybe;
  //var title = chatConnectionMaybe.chatConnection
  //  ? 'Chat with ' + chatConnectionMaybe.chatConnection.user.name
  //  : 'Chat';
  //var sliderState = config.sliderState;
  //var sliderGlyph = getSliderGlyph(sliderState);
  var title = 'Chat';
  var sliderGlyph = getSliderGlyph(OPEN);

  //var users = config.users;
  //var messages = config.messages;
  var users = [];
  var messages = [];

  return DIV(
    {
      classes : { 'spa-chat': true },
      style   : { height: '243.243244171143px' }
    },
    CHAT_HEAD(
      DIV(
        {
          classes : { 'spa-chat-head-toggle': true },
          attribs : { title: 'Tap to close' }
        },
        sliderGlyph),
      TITLE(title)),
    CLOSER('x'),
    DIV(
      {
         classes : { 'spa-chat-sizer': true },
         style   : { height: '216.216217041016px' }
      },
      LIST(
        BOX(
          //users.map(getListName))),
          NOTE('To chat alone is the fate of all greate souls...\n\nNo one is online.'))),
      MSG(
        MSG_LOG(
          messages.map(getMessage)),
        MSG_IN(
          MSG_FORM(
            null,
            TEXT(),
            SUBMIT({ style: { display: 'none' }}),
            MSG_SEND('send'))))));
}

module.exports = function createSpa() {
 return DIV(
   { id: 'spa' },
   SHELL_HEAD(
     LOGO(
       H1(null, 'SPA'),
       P(null, 'javascript end to end')),
     ACCOUNT('secundus12')),
   MAIN(
     NAV(
       DIV(
         {
           classes: {
             'spa-avtr-box'  : true,
             'spa-x-is-user' : true 
           },
           attribs: {
             'data-id' : '5800448895d827132315c186',
             'title'   : 'secundus12'
           },
           style: {
             top                : '25px',
             left               : '25px',
             'background-color' : 'rgb(136, 255, 136)'
           }
         },
         'secundus12')),
     CONTENT()),
   FOOT(),
   MODAL(),
   createChatConsole());
};

var createComponent     = require('./ribosome/createComponent');
var _createDivComponent = require('./ribosome/_createDivComponent');
var DIV                 = require('./ribosome/elements').DIV;
var SIZER               = require('./SIZER');

var CHAT      = _createDivComponent('spa-chat');
var CHAT_HEAD = _createDivComponent('spa-chat-head');
var TOGGLE    = _createDivComponent('spa-chat-head-toggle');
var TITLE     = _createDivComponent('spa-chat-head-title');
var CLOSER    = _createDivComponent('spa-chat-closer');

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

var SliderState = {
  OPEN   : 'open',
  CLOSED : 'closed',
  HIDDEN : 'hidden'
};

var getSliderHeight = function (sliderState) {
  switch (sliderState) {
    case SliderState.OPEN:   return openHeight;
    case SliderState.HIDDEN: return 0;
    case SliderState.CLOSED: return closedHeight;
    default: throw new Error('invalid slider state');
  }
};

var getAnimationTime = function (sliderState) {
  switch (sliderState) {
    case SliderState.OPEN:   return openTime;
    case SliderState.HIDDEN: return openTime;
    case SliderState.CLOSED: return closedTime;
    default: throw new Error('invalid slider state');
  }
};

var getSliderTitle = function (sliderState) {
  switch (sliderState) {
    case SliderState.OPEN:   return openTitle;
    case SliderState.HIDDEN: return '';
    case SliderState.CLOSED: return closedTitle;
    default: throw new Error('invalid slider state');
  }
};

var getSliderGlyph = function (sliderState) {
  switch (sliderState) {
    case SliderState.OPEN:   return '=';
    case SliderState.HIDDEN: return '+';
    case SliderState.CLOSED: return '+';
    default: throw new Error('invalid slider state');
  }
};

var createChatConsole = function (config) {
  //var chatConnectionMaybe = config.chatConnectionMaybe;
  //var title = chatConnectionMaybe.chatConnection
  //  ? 'Chat with ' + chatConnectionMaybe.chatConnection.user.name
  //  : 'Chat';
  //var sliderState = config.sliderState;
  //var sliderGlyph = getSliderGlyph(sliderState);
  var title = 'Chat';
  var sliderGlyph = getSliderGlyph(SliderState.OPEN);
  var sliderState = config.sliderState;
  var height = sliderState === SliderState.OPEN
    ? 243.243244171143
    : 26.6666;

  return DIV(
    {
      classes : { 'spa-chat': true },
      style   : { height: height + 'px' }
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
    SIZER({ packets: config.packets, users: config.users }));
};

module.exports = createChatConsole;

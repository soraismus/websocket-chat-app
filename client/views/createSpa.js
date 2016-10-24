var _createDivComponent = require('./ribosome/_createDivComponent');
var DIV                 = require('./ribosome/elements').DIV;
var H1                  = require('./ribosome/elements').H1;
var P                   = require('./ribosome/elements').P;
var createChatConsole   = require('./createChatConsole');

var SHELL_HEAD = _createDivComponent('spa-shell-head');
var ACCOUNT    = _createDivComponent('spa-shell-head-acct');
var LOGO       = _createDivComponent('spa-shell-head-logo');
var MAIN       = _createDivComponent('spa-shell-main');
var NAV        = _createDivComponent('spa-shell-main-nav');
var CONTENT    = _createDivComponent('spa-shell-main-content');
var FOOT       = _createDivComponent('spa-shell-foot');
var MODAL      = _createDivComponent('spa-shell-modal');

module.exports = function createSpa(config) {
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
   createChatConsole({
     chatConsoleState : config.chatConsoleState,
     packets          : config.packets,
     users            : config.users
   }));
};

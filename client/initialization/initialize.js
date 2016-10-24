//var getInitialModel     = require('./models/getInitialModel');
//var getInitialViewModel = require('./view/recreateConsole');
//var initializeControl   = require('./control/initializeControl');
//var render              = require('./render');
//var subscribe           = require('./subscribe');

//var initializeView      = require('../views/createChatConsole');
var createSpa      = require('../views/createSpa');
var initializeView = require('../views/initialize');

var getRouteElement = require('reactive-aspen-route');
var Route = getRouteElement(function (value) {
  console.log(value);
});

function getHashRoute(chatConsoleState) {
  switch (chatConsoleState) {
    case 'closed': return '/closed';
    default:       return '/open';
  }
};

function initialize(config) {
  var nodeId = config.nodeId;
  var viewModel = createSpa();
  var attachmentPoint = document.getElementsByTagName('body')[0];

  initializeView(
    function attachToDom(element) {
      attachmentPoint.appendChild(element);
    },
    viewModel);

  //initializeControl(
  //  subscribe,
  //  render(viewModel, attachmentPoint.childNodes[0], controlConfig, _scroll),
  //  controlConfig);

  var chatConsoleState = config.chatConsoleState;

  chatConsoleState = 'open';

  Route({
    hash         : getHashRoute(chatConsoleState),
    onHashChange : true
  });

}

module.exports = initialize;

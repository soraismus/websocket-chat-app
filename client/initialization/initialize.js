//var getInitialModel     = require('./models/getInitialModel');
//var getInitialViewModel = require('./view/recreateConsole');
var initializeControl   = require('../controllers/initialize');
var render              = require('./render');

//var initializeView      = require('../views/createChatConsole');
var createSpa      = require('../views/createSpa');
var initializeView = require('../views/initialize');

var getRouteElement = require('reactive-aspen-route');
var Route = getRouteElement(function (value) {
  console.log(value);
});

var getHashRoute = function (chatConsoleState) {
  switch (chatConsoleState) {
    case 'closed': return '/closed';
    default:       return '/open';
  }
};

var initialize = function (config) {
  var nodeId = config.nodeId;
  //var initialModel = getInitialModel();
  var viewModel = createSpa(config);
  var attachmentPoint = document.getElementsByTagName('body')[0];

  initializeView(
    function attachToDom(element) {
      attachmentPoint.appendChild(element);
    },
    viewModel);

  var getAttachmentPoint = function () {
    return attachmentPoint.childNodes[1];
    // return attachmentPoint.getElementById(nodeId);
  };

  var initialModel = {
    chatConsoleState : 'open',
    packets          : [],
    users            : []
  };

  var controlConfig = Object.seal({
    appState : initialModel
  });

  var eventPublishers = {};

  initializeControl(
    eventPublishers,
    render(viewModel, getAttachmentPoint, controlConfig));

  Route({
    hash         : getHashRoute(config.chatConsoleState),
    onHashChange : true
  });

}

module.exports = initialize;

//var getInitialModel     = require('./models/getInitialModel');
//var getInitialViewModel = require('./view/recreateConsole');
//var initializeControl   = require('./control/initializeControl');
//var render              = require('./render');
//var subscribe           = require('./subscribe');

//var initializeView      = require('../views/createChatConsole');
var createSpa      = require('../views/createSpa');
var initializeView = require('../views/initialize');

function initialize(config) {
  var nodeId = config.nodeId;

  var viewModel = createSpa();

  //var attachmentPoint = document.getElementById(nodeId);
  var attachmentPoint = document.getElementsByTagName('body')[0];

  //function initializeView(attachToDom, viewModel) {
  initializeView(
    function attachToDom(element) {
      attachmentPoint.appendChild(element);
    },
    viewModel);

  //initializeControl(
  //  subscribe,
  //  render(viewModel, attachmentPoint.childNodes[0], controlConfig, _scroll),
  //  controlConfig);
}

module.exports = initialize;

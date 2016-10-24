var diff          = require('../views/ribosome/diff');
var getAppState   = require('../controllers/getAppState');
var getViewModel  = require('../views/createSpa');
var interpreter   = require('../views/ribosome/interpreter');
var modifyElement = interpreter.modifyElement;

// "Global" state, so there can be only one.
// `modifyElement` is always called, so may be overly slow.
var render = function (viewModel, getAttachmentPoint, controlConfig) {
  var rootElement = getAttachmentPoint();
  var _viewModel = viewModel;
  return function (mapEventToCommand) {
    return function (event) {
      var appState = getAppState(
        mapEventToComamnd(event),
        controlConfig);
      var newViewModel = getViewModel(appState);
      modifyElement(rootElement, diff(newViewModel, _viewModel));
      controlConfig.appState = appState;
      _viewModel = newViewModel;
    };
  };
};

module.exports = render;

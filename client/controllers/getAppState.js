var _App = require('../models/actions/_App');

var getAppState = function (command, controlConfig) {
  var action = command.name;
  var appState = controlConfig.appState;
  switch (action) {
    case 'setSliderState':
      return _App.setSliderState(appState, command.state);
    case 'addChar':
      return _App.addChar(appState, command.char);
    case 'completeWord':
      return _App.completeWord(appState, controlConfig.getCandidates);
    case 'noOp':
      return appState;
    case 'submit':
      return _App.submit(appState, controlConfig.transform);
    default:
      //return _App[action](appState);
      return appState;
  }
};

module.exports = getAppState;

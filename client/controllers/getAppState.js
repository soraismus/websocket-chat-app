var _App = require('../models/actions/_App');

var getAppState = function (command, controlConfig) {
  var command = command.name;
  var appSate = controlConfig.appState;
  switch (command) {
    case 'addChar':
      return _App.addChar(appState, command.char);
    case 'completeWord':
      return _App.completeWord(appState, controlConfig.getCandidates);
    case 'noOp':
      return appState;
    case 'submit':
      return _App.submit(appState, controlConfig.transform);
    default:
      //return _App[command](appState);
      return appState;
  }
};

module.exports = getAppState;

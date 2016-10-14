var diff          = require('../ribosome/diff');
var getViewModel  = require('./view/recreateConsole');
var modifyElement = require('../ribosome/interpreter').modifyElement;

function render(viewModel, rootElement, controlConfig) {
  var _viewModel = viewModel;

  return function (model) {
    var newViewModel = getViewModel(model);

    modifyElement(rootElement, diff(newViewModel, _viewModel));

    controlConfig.viewport = model;

    _viewModel = newViewModel;
  };
}

module.exports = render;

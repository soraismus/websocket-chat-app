var createElement = require('./ribosome/interpreter').createElement;

function initializeView(attachToDom, viewModel) {
  attachToDom(createElement(viewModel));
}

module.exports = initializeView;

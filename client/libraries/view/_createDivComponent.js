'use strict';

var isString = require('./isString');

module.exports = function _createDivComponent(primaryClass) {
  return function () {
    var classes = {};
    classes[primaryClass] = true;
    var element = { tag: 'div', classes: classes };

    if (arguments.length > 0) {
      var args = [].slice.call(arguments, 0);

      if (args.length === 1 && isString(args[0])) {
        element.children = args[0];
      } else {
        // What if any of the components of `args` is a string?
        element.children = [].concat.apply([], args);
      }
    }

    return element;
  };
};

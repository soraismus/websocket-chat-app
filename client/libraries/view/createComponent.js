'use strict';

var isString = require('./isString');

module.exports = function createComponent(tag, primaryClass) {
  return function (config) {
    var classes = {};
    classes[primaryClass] = true;
    var element = { tag: tag, classes: classes };

    if (config != null) { // isObject

      for (var key in config) {
        if (key === 'id') {
          element.id = config.id;
        }

        if (key === 'classes') {
          for (var _class in config.classes) {
            if (config.classes.hasOwnProperty(_class)) {
              element.classes[_class] = true;
            }
          }
        }

        if (key === 'style') {
          element.style = config.style;
        }

        if (key === 'attribs') {
          element.attribs = config.attribs;
        }
      }
    }

    if (arguments.length > 1) {
      var args = [].slice.call(arguments, 1);

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

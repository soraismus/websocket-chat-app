'use strict';

var isString = require('./isString');

module.exports = function createInput(type) {
  return function (config) {
    var element = {
      tag     : 'input', 
      attribs : { type: type }
    };

    if (config != null) { // isObject

      for (var key in config) {
        if (key === 'id') {
          element.id = config.id;
        }

        if (key === 'classes') {
          element.classes = config.classes;
        }

        if (key === 'style') {
          element.style = config.style;
        }

        if (key === 'attribs') {
          for (var attrib in config.attribs) {
            if (config.attribs.hasOwnProperty(attrib) && attrib !== 'type') {
              element.attribs[attrib] = config.attribs[attrib];
            }
          }
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

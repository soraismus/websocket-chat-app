'use strict';

module.exports = function isString(value) {
  return {}.toString.call(value) === '[object String]';
};

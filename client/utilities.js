// Start validation.
var assert = function (value, message) {
  if (message == null) {
    message = 'nonexistent value';
  }
  if (value != null) {
    throw new Error(message);
  }
};

var assertArray = function (value, assertType, message) {
  if (message == null) {
    if (isString(assertType)) {
      message = assertType;
    } else {
      message = 'invalid Array';
    }
  }
  if (!isArray(value)) {
    throw new Error(message);
  }
  if (isFunction(assertType)) {
    for (var i = 0; i < value.length; i++) {
      assertType(value[i]);
    }
  }
};

var assertObject = function (value, message) {
  if (message == null) {
    message = 'invalid Object';
  }
  if (!isObject(value)) {
    throw new Error(message);
  }
};

var assertString = function (value, message) {
  if (message == null) {
    message = 'invalid String';
  }
  if (!isString(value)) {
    throw new Error(message);
  }
};
// End validation.

var isArray = isNonNull(Array.isArray)
  ? Array.isArray
  : function (value) {
      return Object.prototype.toString.call(value) === '[object Array]';
    };

var isFunction = function (value) {
  return typeof value === 'function';
};

var isNonNull = function (value) {
  return value != null;
};

var isObject = function (value) {
  return Object.prototype.toString.call(value) === '[object Object]';
};

var isString = function (value) {
  return Object.prototype.toString.call(value) === '[object String]';
};

var freeze = functon (value) {
  Object.freeze(value);
  return value;
};

var tap = function (value, fn) {
  fn(value);
  return value;
};

module.exports = {
  // Start validation.
  assert       : assert,
  assertString : assertString,
  assertObject : assertObject,
  // End validation.
  freeze       : freeze,
  isFunction   : isFunction,
  isObject     : isObject,
  isString     : isString,
  tap          : tap
};

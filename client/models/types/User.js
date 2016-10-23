// Start validation.
var assert = require('../../utilities').assert;
var assertString = require('../../utilities').assertString;
// End validation.

var User = function (config) {
  if (!(this instanceof User)) {
    return new User(config);
  }
  // Start validation.
  assertObject(config, 'missing User configuration');
  assertString(config.name);
  // End validation.
  this.name = config.name;
  Object.freeze(this);
};

module.exports = User;

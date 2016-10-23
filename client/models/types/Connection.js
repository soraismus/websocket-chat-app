// Start validation.
var assertArray = require('../../utilities').assertArray;
var assertObject = require('../../utilities').assertObject;
var assertUser = require('../actions/_User').assertUser;
// End validation.

var Connection = function(config) {
  if (!(this instanceof Connection)) {
    return new Connection(config);
  }
  // Start validation.
  assertObject(config, 'missing Connection configuration');
  assertUser(config.principalUser);
  assertArray(config.users, assertUser, 'invalid Connection Users property');
  // End validation.
  this.principalUser = config.principalUser;
  this.users = config.users;
  Object.freeze(this);
};

module.exports = Connection;

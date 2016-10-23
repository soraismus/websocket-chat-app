// Start validation.
var assertObject = require('../../utilities').assertObject;
var assertUser = require('../actions/_User').assertUser;
// End validation.

var Conversation = function (config) {
  if (!(this instanceof Conversation)) {
    return new Conversation(config);
  }
  // Start validation.
  assertObject(config, 'missing Conversation configuration');
  assertUser(config.principalUser);
  assertUser(config.secondaryUser);
  // End validation.
  this.principalUser = config.principalUser;
  this.secondaryUser = config.secondaryUser;
  Object.freeze(this);
};

module.exports = Conversation;

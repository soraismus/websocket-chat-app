// Start validation.
var assert = require('../../utilities').assert;
var assertObject = require('../../utilities').assertObject;
var assertSessionState = require('../actions/_SessionState').assertSessionState;
var assertUser = require('../actions/_User').assertUser;
// End validation.
var isFunction = require('../../utilities').isFunction;
var SessionState = require('./SessionState');

var Session = function (config) {
  if (!(this instanceof Session)) {
    return new Session(config);
  }
  // Start validation.
  assertObject(config, 'missing Session configuration');
  assertSessionState(config.state);
  // End validation.
  switch (config.state) {
    case SessionState.inactive:
      this.state = config.state;
      break;
    case SessionState.pending:
      this.state = config.state;
      break;
    case SessionState.active:
      // Start validation.
      assertUser(config.user);
      // End validation.
      this.state = config.state;
      this.user = config.user;
      break;
  }
  Object.freeze(this);
};

Sesson.prototype.case = function (f0, f1, f2) {
  switch (this.state) {
    case SessionState.inactive:
      return isFunction(f0) ? f0(this) : f0;
    case SessionState.pending:
      return isFunction(f1) ? f1(this) : f1;
    case SessionState.active:
      return isFunction(f2) ? f2(this) : f2;
  }
};

module.exports = Session;

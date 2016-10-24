// Start validation.
var assertSessionState = require('../actions/_SessionState').assertSessionState;
// End validation.
var isFunction = require('../../utilities').isFunction;
var SessionState = require('../types/SessionState');

// Start validation.
var assertSessionState = function (value) {
  if (!isSessionState(value)) {
    throw new Error('invalid SessionState');
  }
};
// End validation.

var _case = function (sessionState, f0, f1, f2) {
  // Start validation.
  assertSessionState(sessionState);
  // End validation.
  switch (sessionState) {
    case SessionState.inactive:
      return isFunction(f0) ? f0(sessionState) : f0;
    case SessionState.pending:
      return isFunction(f1) ? f1(sessionState) : f1;
    case SessionState.active:
      return isFunction(f2) ? f2(sessionState) : f2;
  }
};

var isSessionState = function (value) {
  return value === SessionState.inactive ||
         value === SessionState.pending  ||
         value === SessionState.active;
};

module.exports = {
  // Start validation.
  assertSessionState : assertSessionState,
  case               : _case,
  // End validation.
  isSessionState     : isSessionState
};

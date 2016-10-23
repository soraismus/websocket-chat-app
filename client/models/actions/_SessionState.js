var SessionState = require('../types/SessionState');

// Start validation.
var assertSessionState = function (value) {
  if (!isSessionState(value)) {
    throw new Error('invalid SessionState');
  }
};
// End validation.

var isSessionState = function (value) {
  return value === SessionState.inactive ||
         value === SessionState.pending  ||
         value === SessionState.active;
};

module.exports = {
  // Start validation.
  assertSessionState : assertSessionState,
  // End validation.
  isSessionState     : isSessionState
};

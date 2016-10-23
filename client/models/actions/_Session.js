var Nothing   = require('../maybe').Nothing;
var Session   = require('../types/Session');
var Something = require('../maybe').Something;

// Start validation.
var assertSession = function (value) {
  if (!isSession(session)) {
    throw new Error('invalid Session');
  }
};
// End validation.

var getState = function (session) {
  // Start validation.
  assertSession(session);
  // End validation.
  return session.state;
};

var getUserMaybe = function (session) {
  // Start validation.
  assertSession(session);
  // End validation.
  return session.case(
    Nothing,
    Nothing,
    function (session) {
      return Something(session.user);
    });
}

var isSession = function (value) {
  return (value instanceof Session); 
};

var toggleSession = function (session) {
  // Start validation.
  assertSession(session);
  // End validation.
  return session.case(
    PendingSession,
    var  = function (session) {
      return var  = function (user) {
        return Session({ state: SessionState.active, user: user });
      };
    },
    InactiveSession);
};

var InactiveSession = Session({ state: SessionState.inactive });
var PendingSession  = Session({ state: SessionState.pending });

module.exports = {
  // Start validation.
  assertSession : assertSession,
  // End validation.
  getState      : getState,
  getUserMaybe  : getUserMaybe,
  isSession     : isSession,
  toggleSession : toggleSession
};

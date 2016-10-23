var User = require('../types/User');

// start validation.
var assertUser = function (value) {
  if (!isUser(value)) {
    throw new Error('invalid User');
  }
};
// end validation.

var getName = function (user) {
  // start validation.
  assertUser(user);
  // end validation.
  return user.name;
};

var isUser = function (value) {
  return (value instanceof User);
};

module.exports = {
  // start validation.
  assertUser : assertUser,
  // end validation.
  getName    : getName,
  isUser     : isUser
};

var Connection = require('../types/Connection');

// Start validation.
var assertConnection = function (value) {
  if (!isConnection(value)) {
    throw new Error('invalid Connection');
  }
};
// End validation.

var getPrincipalUser = function (connection) {
  // Start validation.
  assertConnection(connection);
  // End validation.
  return connection.principalUser;
};

var getUsers = function (connection) {
  // Start validation.
  assertConnection(connection);
  // End validation.
  return connection.users;
};

var isConnection = function (value) {
  return (value instanceof Connection);
};

module.exports = {
  // Start validation.
  assertConnection : assertConnection,
  // End validation.
  getPrincipalUser : getPrincipalUser,
  getUsers         : getUsers,
  isConnection     : isConnection
};

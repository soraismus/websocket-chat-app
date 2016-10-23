// Start validation.
var assertUser = require('./_User').assertUser;
// End validation.
var Conversation = require('../types/Conversation');

// Start validation.
var assertConversation = function (value) {
  if (!isConversation(value)) {
    throw new Error('invalid Conversation');
  }
};
// End validation.

var getPrincipalUser = function (conversation) {
  // Start validation.
  assertConversation(conversation);
  // End validation.
  return conversation.principalUser;
};

var getSecondaryUser = function (conversation) {
  // Start validation.
  assertConversation(conversation);
  // End validation.
  return conversation.secondaryUser;
};

var isConversation = function (value) {
  return (value instanceof Conversation); 
};

var switchPartner = function (conversation, secondaryUser) {
  // Start validation.
  assertConversation(conversation);
  assertUser(secondaryUser);
  // End validation.
  return Conversation(conversation.principalUser, secondaryUser);
};

module.exports = {
  // Start validation.
  assertConversation : assertConversation,
  // End validation.
  getPrincipalUser   : getPrincipalUser,
  getSecondaryUser   : getSecondaryUser,
  isConversation     : isConversation,
  switchPartner      : switchPartner
};

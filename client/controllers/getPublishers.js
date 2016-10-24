var getNode = require('./getNode');

var contains = function (array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
};

var getPublishers = function (hashChanges) {
  var avatarClicks = getNode();

  document
    .getElementsByClassName('spa-shell-main-nav')[0]
    .addEventListener('mouseup', function (event) {
      if (contains(event.target.classList, 'spa-avtr-box')) {
        avatarClicks.publish(event);
      }
    });

  return {
    'avatar-clicks' : avatarClicks.subscribe,
    'hash-changes'  : hashChanges.subscribe
  };
};

module.exports = getPublishers;

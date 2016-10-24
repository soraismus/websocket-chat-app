var getNode = function () {
  var subscribers = [];
  var publish = function (event) {
    for (var i = 0; i < subscribers.length; i++) {
      subscribers[i](event);
    }
  };
  var subscribe = function (handleEvent) {
    subscribers.push(handleEvent);
  };
  return {
    publish   : publish,
    subscribe : subscribe
  };
};

var contains = function (array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
};

var getPublishers = function () {
  var avatarClicks = getNode();

  document
    .getElementsByClassName('spa-shell-main-nav')[0]
    .addEventListener('mouseup', function (event) {
      if (contains(event.target.classList, 'spa-avtr-box')) {
        avatarClicks.publish(event);
      }
    });

  return {
    'avatar-clicks' : avatarClicks.subscribe
  };
};

module.exports = getPublishers;

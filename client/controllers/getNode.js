var getNode = function () {
  var id = 0;
  var subscribers = Object.create(null);
  var publish = function (event) {
    for (var key in subscribers) {
      subscribers[key](event);
    }
  };
  var subscribe = function (handleEvent) {
    var key = id;
    subscribers[key] = handleEvent;
    id += 1;
    return function () {
      delete subscribers[key];
    };
  };
  return {
    publish   : publish,
    subscribe : subscribe
  };
};

module.exports = getNode;

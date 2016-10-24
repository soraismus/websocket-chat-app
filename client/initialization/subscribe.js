//function subscribe(getElement, eventType, eventHandler) {
//  getElement().addEventListener(eventType, suppressDefault(eventHandler));
//}

//var supressDefault = function (handleEvent) {
//  return function (event) {
//    event.preventDefault();
//    handleEvent(event);
//  };
//};

// var getElement = function (elementId) {
//   return document.getElementById(elementId);
// };
// var listen = function (eventType, eventHandler) {
//   getElement(id0).addEventListener(eventType, eventHandler);
// };

var subscribe = function (listen, eventType, eventHandler) {
  listen(eventType, eventHandler);
};

module.exports = subscribe;

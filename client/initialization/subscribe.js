//function subscribe(getElement, eventType, eventHandler) {
//  getElement().addEventListener(eventType, suppressDefault(eventHandler));
//}

function subscribe(listen, eventType, eventHandler) {
  listen(eventType, eventHandler);
}

function supressDefault(handleEvent) {
  return function (event) {
    event.preventDefault();
    handleEvent(event);
  };
}

module.exports = subscribe;

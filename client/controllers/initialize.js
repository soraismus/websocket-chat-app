// publishers.js :-> register all event emitters/listeners
// commanders.js :-> adapt all events to a uniform command API.
//   'keydown' event -> intepretKeydown(event)
// intializeControl.js :-> instruct all commanders to
//   map their commands to AppState
//   and then to render that app state
//   -- or to daisychain their commands by emitting to
//      another publisher/commander (??)

var initializeControl = function (getCommanders, render, notify) {
  var commanders = getCommanders();
  commanders['avatar-clicks'](function (event) {
    console.log(event);
    //if (contains(event.target.classList, 'spa-avtr-box')) {
    //  console.log('avatar');
    //}
  });
  // publishers['keydown'].subscribe(render(interpretKeydown));
  // publishers['avatarCreation'].subscribe(notify('persist'));
  // publishers['persist'].subscribe(render(interpretPersistedData));

  /*
  var getElement = function (elementId) {
    return document.getElementById(elementId);
  };
  var listen = function (eventType, eventHandler) {
    getElement(id0).addEventListener(eventType, eventHandler);
  };
  subscribe(listen, 'keydown', render(interpretKeydown));
  */

  // subscribe('keydown', render(interpretKeydown));

  /*
  subscribe('keydown', handleEvent(interpretKeydown));
  var onToggleSession = function (event) {};
  var sessionConsole =
    document.getElementsByClassname('spa-shell-head-acct');
  sessionConsole.addEventListener('mouseup', onToggleSession);
  subscribe(events.sessionToggle, toggleSession);
  */

  /*
  subscribeElement(getAvatarElements, 'tapNav',       onTapNav      );
  subscribeElement(getAvatarElements, 'heldstartNav', onHeldstartNav);
  subscribeElement(getAvatarElements, 'heldmoveNav',  onHeldmoveNav );
  subscribeElement(getAvatarElements, 'heldendNav',   onHeldendNav  );

  subscribeChatSocket(getChatSocket, 'userupdate', onUserUpdate);
  subscribeChatSocket(getChatSocket, 'listchange', onListChange);
  subscribeChatSocket(getChatSocket, 'updatechat', onUserUpdate);
  */

  // avatar :: onSetChatee, onLogout

  /*
  avatars.addEventListener('tapNav',       onTapNav      );
  avatars.addEventListener('heldstartNav', onHeldstartNav);
  avatars.addEventListener('heldmoveNav',  onHeldmoveNav );
  avatars.addEventListener('heldendNav',   onHeldendNav  );

  chatConsole.addEventListener('keypress', onTapToggle);
  chatConsole.addEventListener('keypress', onTapToggle);

  chatChannel.on('userupdate', onUserUpdate);
  chatChannel.on('listchange', onListChange);
  chatChannel.on('updatechat', onUserUpdate);
  */
}

/*
var onKeyDown      = function (event) {};
var onTapNav       = function (event) {
  render(getModel(getAction(event)));
};
var onHeldstartNav = function (event) {};
var onHeldmoveNav  = function (event) {};
var onHeldendNav   = function (event) {};
var onUserUpdate   = function (user)  {};
var onListChange   = function (users) {};
var onChatUpdate   = function (value) {};
*/

module.exports = initializeControl;

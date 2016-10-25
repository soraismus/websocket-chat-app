// publishers.js :-> register all event emitters/listeners
// commanders.js :-> adapt all events to a uniform command API.
//   'keydown' event -> intepretKeydown(event)
// intializeControl.js :-> instruct all commanders to
//   map their commands to AppState
//   and then to render that app state
//   -- or to daisychain their commands by emitting to
//      another publisher/commander (??)

var hashChanges = require('./hashChanges'); // Here or higher?

var log = function (value) {
  console.log(value);
};

var initializeControl = function (getCommanders, render, notify) {
  var commanders = getCommanders(hashChanges);
  commanders['avatar-clicks'](log);
  commanders['hash-changes'](log);
  commanders['hash-changes'](render(function (hashFragment) {
    return { name: 'setSliderState', state: hashFragment };
  }));

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

  sessionConsole.addEventListener('mouseup', onToggleSession);
  */
}

module.exports = initializeControl;

function getSession(action, session) {
  var command = action.name;
  switch (command) {
    case 'toggleSessionMaybe':
      return Session.toggleSessionMaybe(
        session,
        Session.getUsernameMaybe(session));
  }
}

/*
function getViewport(action, config) {
  var command = action.name;
  var viewport = config.viewport;
  switch (command) {
    case 'addChar':
      return Viewport.addChar(viewport, action.char);
    case 'completeWord':
      return Viewport.completeWord(viewport, config.getCandidates);
    case 'noOp':
      return viewport;
    case 'submit':
      return Viewport.submit(viewport, config.transform);
    default:
      return Viewport[command](viewport);
  }
}
*/

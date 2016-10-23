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

/*
function render() { }
function getModel(action) { var model = {}; return model; } 
function interpretKeydown(event) { var action = {}; return action; } 
function initializeControl(subscribe, render) {
  var handleEvent = function (transformEventToCommand) {
    return function (event) {
      render(getModel(transformEventToCommand(event)));
    };
  }

  subscribe('keydown', handleEvent(interpretKeydown));
}
*/

function initializeControl(
  //subscribeElement,
  //subscribeChatSocket,
  render,
  config,
  events,
  eventEmitters,
  socketClient) {

  function onToggleSession(event) {}

  var sessionConsole = document.getElementsByClassname('spa-shell-head-acct');
  sessionConsole.addEventListener('mouseup', onToggleSession);

  subscribe(events.sessionToggle, toggleSession);

  //    $acct      : $container.find('.spa-shell-head-acct'),
  // onTapAcct = function ( event ) {
  //  var acct_text, user_name, user = spa.model.people.get_user();
  //  if ( user.get_is_anon() ) {
  //    user_name = prompt( 'Please sign-in' );
  //    spa.model.people.login( user_name );
  //    jqueryMap.$acct.text( '... processing ...' );
  //  }
  //  else {
  //   spa.model.people.logout();
  //  }
  //  return false;
  //};

  /*
  var handleEvent = function (getAction) {
    return function (event) {
      render(getModel(getAction(event), config));
    };
  }
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

  avatars.addEventListener('tapNav',       onTapNav      );
  avatars.addEventListener('heldstartNav', onHeldstartNav);
  avatars.addEventListener('heldmoveNav',  onHeldmoveNav );
  avatars.addEventListener('heldendNav',   onHeldendNav  );

  chatConsole.addEventListener('keypress', onTapToggle);
  chatConsole.addEventListener('keypress', onTapToggle);

  chatChannel.on('userupdate', onUserUpdate);
  chatChannel.on('listchange', onListChange);
  chatChannel.on('updatechat', onUserUpdate);
}

/*
var _uuid = function(i, j) {
  var nbr;
  nbr = (function() {
    switch (i) {
      case 12:
        return 4;
      case 16:
        return j & 3 | 8;
      default:
        return j;
    }
  })();
  return nbr.toString(16);
};

var uuid = function() {
  var i, id, random, _i;
  id = '';
  for (i = _i = 0; _i < 32; i = ++_i) {
    random = Math.random() * 16 | 0;
    if (__indexOf.call(signposts, i) >= 0) {
      id += '-';
    }
    id += _uuid(i, random);
  }
  return id;
};

var signposts = [8, 12, 16, 20];

var publishers = {};

function createPublisher() {
  var eventHandlers = {};
  var subscribe = function(eventHandler) {
    var key = uuid();
    eventHandlers[key] = eventHandler;
    return function () {
      delete eventHandlers[key];
    };
  };
  var publish = function(event) {
    for (var key in eventHandlers) {
      if (eventHandlers.hasOwnProperty(key)) {
        eventHandlers[key](event);
      }
    }
  };
  return { addEventListener: subscribe, publish: publish };
}
*/



/* Reactive-aspen
  onValue = (source, sink) ->
    pandoOnValue ((interpret source), sink)

  transubscribe = (transmerse) -> (dispatcher, sink) ->
    dispatcher.subscribe (transmerse sink)

  pandOnValue = transubscribe filteringNonterminal

  getDispatcher = (label, eventstream?) ->
    getBus = if eventstream? then getEventStream else getProperty
    dispatchers[label] || getBus label

  getEventStream = register createEventStreamBus

  _register = (busFactory, label) ->
    id = 0
    bus = dispatchers[label] = busFactory ()
    bus.setAlias label
    load = \observable ->
      _unplug = connect (observable, bus)
      observable-id = id
      unplug = ->
        delete disconnectors[label][observable-id]
        _unplug ()
      disconnectors[label] ?= {}
      disconnectors[label][observable-id] = unplug
      id += 1
      unplug
    plugs[label] = load
    bus

  register = (busFactory) -> (label/s) ->
    switch
      when isArray label/s
        label/s.map (register busFactory)
      when matchesExistingDispatcher? label/s
        dispatchers[label/s]
      else
        _register (busFactory, label/s)

  createEventStreamBus = ->
    createEventStream () fromInternalDispatchOnly 

  createEventStream = \opts ->
    createDispatcherType(genESOpts(opts))

  fromInternalDispatchOnly = returnNoOp
  returnNoOp = -> noOp
  noOp = (->)

createDispatcherType = \opts \source ->
  { mixins, proto, transformDispatch, transformSubscribe } = parseOpts opts
  ...
  properties = {
    activate
    dispatch
    getAlias
    id
    setAlias
    subscribe
    terminate
    unsubscribe }

  assignId (extendProto (proto, properties, mixins))
*/

module.exports = initializeControl;

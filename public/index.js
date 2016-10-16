/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var initialize = __webpack_require__(1);
	initialize({ nodeId: 'spa' });


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	//var getInitialModel     = require('./models/getInitialModel');
	//var getInitialViewModel = require('./view/recreateConsole');
	//var initializeControl   = require('./control/initializeControl');
	//var render              = require('./render');
	//var subscribe           = require('./subscribe');

	//var initializeView      = require('../views/createChatConsole');
	var createSpa      = __webpack_require__(2);
	var initializeView = __webpack_require__(11);

	function initialize(config) {
	  var nodeId = config.nodeId;

	  var viewModel = createSpa();

	  //var attachmentPoint = document.getElementById(nodeId);
	  var attachmentPoint = document.getElementsByTagName('body')[0];

	  //function initializeView(attachToDom, viewModel) {
	  initializeView(
	    function attachToDom(element) {
	      attachmentPoint.appendChild(element);
	    },
	    viewModel);

	  //initializeControl(
	  //  subscribe,
	  //  render(viewModel, attachmentPoint.childNodes[0], controlConfig, _scroll),
	  //  controlConfig);
	}

	module.exports = initialize;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var _createDivComponent = __webpack_require__(3);
	var DIV                 = __webpack_require__(5).DIV;
	var H1                  = __webpack_require__(5).H1;
	var P                   = __webpack_require__(5).P;
	var createChatConsole   = __webpack_require__(6);

	var SHELL_HEAD = _createDivComponent('spa-shell-head');
	var ACCOUNT    = _createDivComponent('spa-shell-head-acct');
	var LOGO       = _createDivComponent('spa-shell-head-logo');
	var MAIN       = _createDivComponent('spa-shell-main');
	var NAV        = _createDivComponent('spa-shell-main-nav');
	var CONTENT    = _createDivComponent('spa-shell-main-content');
	var FOOT       = _createDivComponent('spa-shell-foot');
	var MODAL      = _createDivComponent('spa-shell-modal');

	module.exports = function createSpa() {
	 return DIV(
	   { id: 'spa' },
	   SHELL_HEAD(
	     LOGO(
	       H1(null, 'SPA'),
	       P(null, 'javascript end to end')),
	     ACCOUNT('secundus12')),
	   MAIN(
	     NAV(
	       DIV(
	         {
	           classes: {
	             'spa-avtr-box'  : true,
	             'spa-x-is-user' : true 
	           },
	           attribs: {
	             'data-id' : '5800448895d827132315c186',
	             'title'   : 'secundus12'
	           },
	           style: {
	             top                : '25px',
	             left               : '25px',
	             'background-color' : 'rgb(136, 255, 136)'
	           }
	         },
	         'secundus12')),
	     CONTENT()),
	   FOOT(),
	   MODAL(),
	   createChatConsole());
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isString = __webpack_require__(4);

	module.exports = function _createDivComponent(primaryClass) {
	  return function () {
	    var classes = {};
	    classes[primaryClass] = true;
	    var element = { tag: 'div', classes: classes };

	    if (arguments.length > 0) {
	      var args = [].slice.call(arguments, 0);

	      if (args.length === 1 && isString(args[0])) {
	        element.children = args[0];
	      } else {
	        // What if any of the components of `args` is a string?
	        element.children = [].concat.apply([], args);
	      }
	    }

	    return element;
	  };
	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function isString(value) {
	  return {}.toString.call(value) === '[object String]';
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	function createElement(tag) {
	  return function (config) {
	    var element = { tag: tag };

	    if (config != null) { // isObject

	      for (var key in config) {
	        if (key === 'id') {
	          element.id = config.id;
	        }

	        if (key === 'classes') {
	          element.classes = config.classes;
	        }

	        if (key === 'style') {
	          element.style = config.style;
	        }

	        if (key === 'attribs') {
	          element.attribs = config.attribs;
	        }
	      }
	    }

	    if (arguments.length > 1) {
	      var args = [].slice.call(arguments, 1);

	      if (args.length === 1 && isString(args[0])) {
	        element.children = args[0];
	      } else {
	        element.children = [].concat.apply([], args);
	      }
	    }

	    return element;
	  };
	}

	function isString(value) {
	  return {}.toString.call(value) === '[object String]';
	}

	var tags = {
	  'A': true,
	  'BUTTON': true,
	  'CANVAS': true,
	  'CODE': true,
	  'DIV': true,
	  'FOOTER': true,
	  'FORM': true,
	  'H1': true,
	  'H2': true,
	  'H3': true,
	  'H4': true,
	  'H5': true,
	  'H6': true,
	  'HEADER': true,
	  'IMG': true,
	  'LABEL': true,
	  'LI': true,
	  'LINK': true,
	  'NAV': true,
	  'NOSCRIPT': true,
	  'OPTGROUP': true,
	  'OPTION': true,
	  'OUTPUT': true,
	  'P': true,
	  'PARAM': true,
	  'PRE': true,
	  'SCRIPT': true,
	  'SECTION': true,
	  'SELECT': true,
	  'SOURCE': true,
	  'SPAN': true,
	  'STYLE': true,
	  'TEXTAREA': true
	};

	var elementFactories = {};

	for (var tagName in tags) {
	  elementFactories[tagName] = createElement(tagName);
	}

	module.exports = elementFactories;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var createComponent     = __webpack_require__(7);
	var _createDivComponent = __webpack_require__(3);
	var DIV                 = __webpack_require__(5).DIV;
	var TEXT                = __webpack_require__(8);
	var SUBMIT              = __webpack_require__(10);

	var CHAT      = _createDivComponent('spa-chat');
	var CHAT_HEAD = _createDivComponent('spa-chat-head');
	var TOGGLE    = _createDivComponent('spa-chat-head-toggle');
	var TITLE     = _createDivComponent('spa-chat-head-title');
	var CLOSER    = _createDivComponent('spa-chat-closer');
	var LIST      = _createDivComponent('spa-chat-list');
	var BOX       = _createDivComponent('spa-chat-list-box');
	var NOTE      = _createDivComponent('spa-chat-list-note');
	var MSG       = _createDivComponent('spa-chat-msg');
	var MSG_LOG   = _createDivComponent('spa-chat-msg-log');
	var MSG_IN    = _createDivComponent('spa-chat-msg-in');

	//var SIZER = _createDivComponent('spa-chat-sizer');

	var MSG_FORM = createComponent('form', 'spa-chat-msg-form');
	var MSG_SEND = _createDivComponent('spa-chat-msg-send');

	// slider
	//   openTime        : 250 /* ms */
	//   closeTime       : 250 /* ms */
	//   openTitle       : 'Tap to close'
	//   closeTitle      : 'Tap to open'
	//   openMinHeight   : 10 /* em */
	//   windowMinHeight : 20 /* em */

	// chatConsole
	//   state : 'closed' /* | 'opened' | 'hidden' */

	// toggle_text : '+' /* | '=' */

	// px_per_em        : 0
	// slider_hidden_px : 0
	// slider_closed_px : 0
	// slider_opened_px : 0

	var OPEN   = 'open';
	var CLOSED = 'closed';
	var HIDDEN = 'hidden';

	function getSliderHeight(state) {
	  switch (state) {
	    case OPEN: return openHeight;
	    case HIDDEN: return 0;
	    case CLOSED: return closedHeight;
	    default: throw new Error('invalid slider state');
	  }
	}

	function getAnimationTime(state) {
	  switch (state) {
	    case OPEN: return openTime;
	    case HIDDEN: return openTime;
	    case CLOSED: return closedTime;
	    default: throw new Error('invalid slider state');
	  }
	}

	function getSliderTitle(state) {
	  switch (state) {
	    case OPEN: return openTitle;
	    case HIDDEN: return '';
	    case CLOSED: return closedTitle;
	    default: throw new Error('invalid slider state');
	  }
	}

	function getSliderGlyph(state) {
	  switch (state) {
	    case OPEN: return '=';
	    case HIDDEN: return '+';
	    case CLOSED: return '+';
	    default: throw new Error('invalid slider state');
	  }
	}

	function getListName(user) {
	  return DIV(
	    {
	      classes : 'spa-chat-list-name',
	      attributes : { 'data-id': user.id }
	    },
	    user.name);
	}

	var CHAT_CONNECTION = 'chat-connection';
	var DEPARTURE_ALERT = 'departure-alert';
	var ME = 'me';
	var MESSAGE = 'message';

	function getMessage(value) {
	  switch (value.type) {
	    case CHAT_CONNECTION:
	      return DIV(
	        { classes: 'spa-chat-msg-log-alert' },
	        'Now chatting with ' + value.user);
	    case ME:
	      return DIV(
	        { classes: 'spa-chat-msg-log-me' },
	        value.user + ': ' + value.message);
	    case MESSAGE:
	      return DIV(
	        { classes: 'spa-chat-msg-log-msg' },
	        value.user + ': ' + value.message);
	    case DEPARTURE_ALERT:
	      return DIV(
	        { classes: 'spa-chat-msg-log-alert' },
	        value.user + 'has left the chat');
	    default:
	      throw new Error('invalid message state');
	  }
	}

	module.exports = function createChatConsole(config) {
	  //var chatConnectionMaybe = config.chatConnectionMaybe;
	  //var title = chatConnectionMaybe.chatConnection
	  //  ? 'Chat with ' + chatConnectionMaybe.chatConnection.user.name
	  //  : 'Chat';
	  //var sliderState = config.sliderState;
	  //var sliderGlyph = getSliderGlyph(sliderState);
	  var title = 'Chat';
	  var sliderGlyph = getSliderGlyph(OPEN);

	  //var users = config.users;
	  //var messages = config.messages;
	  var users = [];
	  var messages = [];

	  return DIV(
	    {
	      classes : { 'spa-chat': true },
	      style   : { height: '243.243244171143px' }
	    },
	    CHAT_HEAD(
	      DIV(
	        {
	          classes : { 'spa-chat-head-toggle': true },
	          attribs : { title: 'Tap to close' }
	        },
	        sliderGlyph),
	      TITLE(title)),
	    CLOSER('x'),
	    DIV(
	      {
	         classes : { 'spa-chat-sizer': true },
	         style   : { height: '216.216217041016px' }
	      },
	      LIST(
	        BOX(
	          //users.map(getListName))),
	          NOTE('To chat alone is the fate of all greate souls...\n\nNo one is online.'))),
	      MSG(
	        MSG_LOG(
	          messages.map(getMessage)),
	        MSG_IN(
	          MSG_FORM(
	            null,
	            TEXT(),
	            SUBMIT({ style: { display: 'none' }}),
	            MSG_SEND('send'))))));
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isString = __webpack_require__(4);

	module.exports = function createComponent(tag, primaryClass) {
	  return function (config) {
	    var classes = {};
	    classes[primaryClass] = true;
	    var element = { tag: tag, classes: classes };

	    if (config != null) { // isObject

	      for (var key in config) {
	        if (key === 'id') {
	          element.id = config.id;
	        }

	        if (key === 'classes') {
	          for (var _class in config.classes) {
	            if (config.classes.hasOwnProperty(_class)) {
	              element.classes[_class] = true;
	            }
	          }
	        }

	        if (key === 'style') {
	          element.style = config.style;
	        }

	        if (key === 'attribs') {
	          element.attribs = config.attribs;
	        }
	      }
	    }

	    if (arguments.length > 1) {
	      var args = [].slice.call(arguments, 1);

	      if (args.length === 1 && isString(args[0])) {
	        element.children = args[0];
	      } else {
	        // What if any of the components of `args` is a string?
	        element.children = [].concat.apply([], args);
	      }
	    }

	    return element;
	  };
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(9)('text');


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isString = __webpack_require__(4);

	module.exports = function createInput(type) {
	  return function (config) {
	    var element = {
	      tag     : 'input', 
	      attribs : { type: type }
	    };

	    if (config != null) { // isObject

	      for (var key in config) {
	        if (key === 'id') {
	          element.id = config.id;
	        }

	        if (key === 'classes') {
	          element.classes = config.classes;
	        }

	        if (key === 'style') {
	          element.style = config.style;
	        }

	        if (key === 'attribs') {
	          for (var attrib in config.attribs) {
	            if (config.attribs.hasOwnProperty(attrib) && attrib !== 'type') {
	              element.attribs[attrib] = config.attribs[attrib];
	            }
	          }
	        }
	      }
	    }

	    if (arguments.length > 1) {
	      var args = [].slice.call(arguments, 1);

	      if (args.length === 1 && isString(args[0])) {
	        element.children = args[0];
	      } else {
	        // What if any of the components of `args` is a string?
	        element.children = [].concat.apply([], args);
	      }
	    }

	    return element;
	  };
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(9)('submit');


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var createElement = __webpack_require__(12).createElement;

	function initializeView(attachToDom, viewModel) {
	  attachToDom(createElement(viewModel));
	}

	module.exports = initializeView;


/***/ },
/* 12 */
/***/ function(module, exports) {

	function attachElement(parent, element) {
	  if (isString(element)) {
	    parent.innerText = element; // ?
	  } else {
	    parent.appendChild(element);
	  }
	}

	function replaceElement(parent, newElement, oldElement) {
	  if (isString(newElement)) {
	    parent.innerText = newElement; // ?
	  } else {
	    parent.replaceChild(newElement, oldElement);
	  }
	}

	function createAndAttachElement(parent, config) {
	  attachElement(parent, createElement(config));
	}

	function createAndSubstituteElement(parent, config, oldElementIndex) {
	  replaceElement(
	    parent,
	    createElement(config),
	    findChild(parent, { mode: 'index', key: oldElementIndex }));
	}

	function createAndAttachElements(node, elements) {
	  for (var i = 0; i < elements.length; i++) {
	    createAndAttachElement(node, elements[i]);
	  }
	}

	function createElement(config) {
	  if (isString(config)) {
	    return config;
	  }
	  var node = document.createElement(config.tag);
	  if (config.id != null) {
	    node.id = config.id;
	  }
	  if (config.classes != null) {
	    for (var klass in config.classes) {
	      node.classList.add(klass);
	    }
	  }
	  if (config.attribs != null) {
	    for (var attribKey in config.attribs) {
	      if (attribKey !== 'style') {
	        node.setAttribute(attribKey, config.attribs[attribKey]);
	      }
	    }
	  }
	  if (config.style != null) {
	    for (var styleKey in config.style) {
	      node.style[styleKey] = config.style[styleKey];
	    }
	  }
	  if (config.children != null) {
	    if (isString(config.children)) {
	      createAndAttachElement(node, config.children);
	    } else {
	      config.children.forEach(function (newConfig, index) { 
	        createAndAttachElement(node, newConfig);
	      });
	    }
	  }
	  return node;
	}

	function findChild(parent, config) {
	  switch (config.mode) {
	    case 'id':
	      return document.getElementById(config.key);
	    case 'class':
	      return parent.getElementsByClassName(config.key.class)[config.key.index];
	    case 'tag':
	      return parent.getElementsByTagName(config.key.tag)[config.key.index];
	    case 'query':
	      return parent.querySelectorAll(config.key.query)[config.key.index];
	    case 'index':
	      return parent.childNodes[config.key];
	    default:
	      throw new Error('Invalid \"findChild\" mode');
	  }
	}

	function findChildren(parent, config) {
	  var htmlCollection;
	  switch (config.mode) {
	    case 'class':
	      htmlCollection = parent.getElementsByClassName(config.key.class);
	      break;
	    case 'tag':
	      htmlCollection = parent.getElementsByTagName(config.key.tag);
	      break;
	    case 'query':
	      htmlCollection = parent.querySelectorAll(config.key.query);
	      break;
	    default:
	      throw new Error('Invalid \"findChild\" mode');
	  }
	  return Array.prototype.slice.call(htmlCollection);
	}

	function isCommandIndex(value) {
	  return isNumber(value);
	}

	function isNumber(value) {
	  return {}.toString.call(value) === '[object Number]';
	}

	function isString(value) {
	  return {}.toString.call(value) === '[object String]';
	}

	function modifyElement(node, patch) {
	  _modifyElement(node, patch.value, patch.commands);
	}

	function _modifyElement(node, tree, commands) {
	  for (var i = 0; i < tree.length; i++) {
	    var key = tree[i].index;
	    var continuation = tree[i].value;

	    switch (key) {
	      case 'id':
	        var command = commands[continuation];
	        switch (command[0]) {
	          case 'delete':
	            node.removeAttribute('id');
	            break;
	          case 'replace':
	          case 'setAtKey':
	            node.id = command[1];
	            break;
	        }
	        break;

	      case 'tag':
	        break;

	      case 'style':
	        for (var styleIndex = 0; styleIndex < continuation.length; styleIndex++) {
	          var style = continuation[styleIndex].index;
	          var command = commands[continuation[styleIndex].value];
	          switch (command[0]) {
	            case 'delete':
	              node.style.removeProperty(style);
	              break;
	            case 'replace':
	            case 'setAtKey':
	              node.style[style] = command[1];
	              break;
	          }
	        }
	        break;

	      case 'attribs':
	        for (var attribIndex = 0; attribIndex < continuation.length; attribIndex++) {
	          var attrib = continuation[attribIndex].index;
	          var command = commands[continuation[attribIndex].value];
	          switch (command[0]) {
	            case 'delete':
	              node.attributes.removeNamedItem(attrib);
	              break;
	            case 'replace':
	            case 'setAtKey':
	              node.setAttribute(attrib, command[1]);
	              break;
	          }
	        }
	        break;

	      case 'classes':
	        if (isCommandIndex(continuation)) {
	          var command = commands[0];
	          switch (command[0]) {
	            case 'delete':
	              for (var _class in command[1]) {
	                node.classList.remove(_class);
	              }
	              break;
	            case 'setAtKey':
	              for (var _class in command[1]) {
	                node.classList.add(_class);
	              }
	              break;
	          }
	        } else {
	          for (var classIndex = 0; classIndex < continuation.length; classIndex++) {
	            var _class = continuation[classIndex].index;
	            var command = commands[continuation[classIndex].value];
	            switch (command[0]) {
	              case 'delete':
	                node.classList.remove(_class);
	                break;
	              case 'setAtKey':
	                node.classList.add(_class);
	                break;
	            }
	          }
	        }
	        break;

	      case 'children':
	        if (isCommandIndex(continuation)) {
	          var command = commands[continuation]
	          switch (command[0]) {
	            case 'remove':
	              removeChildren(node);
	              break;
	            case 'replace':     // ?
	              if (isString(command[1])) {
	                if (node.childElementCount === 0) {
	                  node.innerText = command[1];
	                } else {
	                  node.innerText = command[1];
	                }
	              } else {
	                removeChildren(node);
	                createAndAttachElements(node, command[1]);
	              }
	              break;
	            case 'insertAtEnd':
	              createAndAttachElement(node, command[1]);
	              break;
	          }
	        } else {
	          for (var childIndex = 0; childIndex < continuation.length; childIndex++) {
	            var child = continuation[childIndex].index;
	            var childContinuation = continuation[childIndex].value;
	            if (isCommandIndex(childContinuation)) {
	              var command = commands[childContinuation]
	              switch (command[0]) {
	                case 'remove':
	                  removeChild(node, child);
	                  break;
	                case 'replace':
	                  createAndSubstituteElement(node, command[1], child);
	                  break;
	                case 'insertAtEnd':
	                  createAndAttachElement(node, command[1]);
	                  break;
	              }
	            } else {
	              _modifyElement(node.childNodes[child], childContinuation, commands);
	            }
	          }
	        }
	        break;
	    }
	  }
	}

	function removeChild(node, childIndex) {
	  removeNode(findChild(node, { mode: 'index', key: childIndex }));
	}

	function removeChildren(node) {
	  var childCount = node.childNodes.length;
	  for (var i = childCount - 1; i >= 0; i--) {
	    node.removeChild(node.childNodes[i]);
	  }
	}

	function removeNode(node) {
	  node.parentNode.removeChild(node);
	}

	module.exports = {
	  createAndAttachElement: createAndAttachElement,
	  createElement: createElement,
	  modifyElement: modifyElement,
	};


/***/ }
/******/ ]);
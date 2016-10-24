var getRouteElement = require('reactive-aspen-route');
var hashChanges     = require('../controllers/hashChanges');

var Route = getRouteElement(hashChanges.publish)

module.exports = Route;

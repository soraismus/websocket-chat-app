var getRouteElement = require('reactive-aspen-route');

var Route = getRouteElement(function (value) {
  console.log(value);
});

module.exports = Route;

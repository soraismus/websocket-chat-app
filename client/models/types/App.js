var App = function (config) {
  if (!(this instanceof App)) {
    return new App(config);
  }
  // Start validation.
  assertObject(config, 'missing Session configuration');
  assertSession(config.session);
  // End validation.
  Object.freeze(this);
}

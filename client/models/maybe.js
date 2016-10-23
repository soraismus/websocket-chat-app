function Maybe(value) {
  this.value = value;
  Object.freeze(this);
}

var Nothing = new Maybe(null);

function isNothingOrNull(value) {
  return value == null || value === Nothing;
}

function Something(value) {
  return new Maybe(value);
}

Maybe.prototype.bind = function (transformMaybe) {
  return isNothingOrNull(this)
    ? this
    : transformMaybe(this.value));
};

Maybe.prototype.map = function (transform) {
  return isNothingOrNull(this)
    ? this
    : Something(transform(this.value));
};

module.exports = {
  isNothingOrNull : isNothingOrNull,
  Nothing         : Nothing,
  Something       : Something
};

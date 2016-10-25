var setSliderState = function (appState, sliderState) {
  return {
    sliderState      : sliderState,
    nodeId           : appState.nodeId,
    packets          : appState.packets,
    users            : appState.users
  };
};

var toggleSliderState = function (appState, sliderState) {
  return {
    sliderState      : sliderState,
    nodeId           : appState.nodeId,
    packets          : appState.packets,
    users            : appState.users
  };
};

module.exports = {
  setSliderState    : setSliderState,
  toggleSliderState : toggleSliderState
};

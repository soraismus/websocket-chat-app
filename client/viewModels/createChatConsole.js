// state :: Opened | Hidden | Closed
// Should `title` be a property?
module.exports = function createChatConsole(state) {
  return {
    state : state,
  };
};

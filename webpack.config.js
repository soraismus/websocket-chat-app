module.exports = {
  entry: './client/initialization/_initialize.js',
  output: {
    path: './public',
    filename: 'index.js'
  },
  node: {
    fs: "empty"
  }
};

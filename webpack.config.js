module.exports = {
  entry: './client/initialization/_initialize.js',
  output: {
    path: './server/public',
    filename: 'index.js'
  },
  node: {
    fs: "empty"
  }
};

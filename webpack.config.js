const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    build: './src/app.js'
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js' // build.js
  }
}

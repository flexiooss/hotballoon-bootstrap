const path = require('path')

module.exports = {
  entry: {
    app: []
  },
  port: 8080,
  html: true,
  dist_url: '/',
  stylelint: './src/css/**/*.css',
  dist_path: path.resolve(__dirname, '../dist'),
  refresh: ['../src/index.html', 'index.html', '../dist/index.html']
}

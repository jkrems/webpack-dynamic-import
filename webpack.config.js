'use strict';
const path = require('path');

module.exports = {
  entry: './import-compare.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

const path = require('path');

// this will copy ./static/** to ./dist/**
module.exports = options => ({
  entry: 'src/index.js',
  proxy: 'http://localhost:5000/api',
  postcss: [
    // add more postcss plugins here
    // by default we have autoprefixer pre added
  ],
  webpack(config) {
    config.resolve.modules.push(path.resolve('src'));

    return config
  }
});

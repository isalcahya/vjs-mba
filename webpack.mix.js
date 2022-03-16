// webpack.mix.js
const mix   = require('laravel-mix');
const path  = require('path');
require('mix-html-builder');

const publicDir = path.resolve(__dirname, 'public/dist');

mix.setPublicPath(publicDir)
.js(`${publicDir}/src/app.js`, 'js')
.html({
  output: '',
  inject: true,
  htmlRoot: `./${publicDir}/src/index.html`,
  minify: {
    removeComments: true
  }
});

mix.webpackConfig({
  resolve: {
    fallback: {
      buffer: false
    }
  }
});

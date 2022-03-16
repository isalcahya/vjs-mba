// webpack.mix.js
const mix = require('laravel-mix');
const path = require('path');
require('mix-html-builder');

mix.setPublicPath('public/dist')
  .js('./public/src/app.js', 'js')
  .html({
    output: '',
    inject: true,
    htmlRoot: './public/src/index.html',
    minify: {
      removeComments: true
    }
  });

mix.webpackConfig({
  resolve: {
    fallback: {
      buffer: false
    },
    alias: {
      '@dist': path.resolve(__dirname, 'dist')
    }
  }
});

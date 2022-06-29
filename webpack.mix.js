let mix      = require('laravel-mix');
let minifier = require('minifier');

// Set the public path
mix.setPublicPath('dist');

// Compile SCSS
mix.sass('src/flexya.scss', 'css');

// Minify
mix.then(() => {
    minifier.minify('dist/css/flexya.css');
});
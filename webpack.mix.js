let mix = require('laravel-mix');

// Set the public path
mix.setPublicPath('dist');

// Compile SCSS
mix.sass('src/flexya.scss', 'css');
let mix = require('laravel-mix');
let bower_dir = "vendor/bower_components/";

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/assets/js/app.js', 'public/js')
//    .sass('resources/assets/sass/app.scss', 'public/css');
mix.styles([
    bower_dir + "bootstrap/dist/css/bootstrap.css",
    bower_dir + "font-awesome/css/font-awesome.css",
    bower_dir + "admin-lte/dist/css/AdminLTE.css",
    bower_dir + "admin-lte/dist/css/skins/skin-blue.css",
    bower_dir + "bootstrap-datepicker/dist/css/bootstrap-datepicker3.css",
    bower_dir + "toastr/toastr.css",

], "public/master/app.css");
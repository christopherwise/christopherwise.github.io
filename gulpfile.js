// gulpfile.js
// Heavily inspired by Mike Valstar's solution:
//   http://mikevalstar.com/post/fast-gulp-browserify-babelify-watchify-react-build/
"use strict";
var babelify = require('babelify'),
    browserify = require('browserify'),
    buffer = require('vinyl-buffer'),
    // coffeeify = require('coffeeify'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    livereload = require('gulp-livereload'),
    merge = require('merge'),
    rename = require('gulp-rename'),
    source = require('vinyl-source-stream'),
    sourceMaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    watchify = require('watchify');
var config = {
    js: {
        src: './js/concat/full.js', // Entry point
        outputDir: './js/build/', // Directory to save bundle to
        mapDir: './js/maps/', // Subdirectory to save maps to
        outputFile: 'bundle.js' // Name to use for bundle
    },
};
// This method makes it easy to use common bundling options in different tasks
function bundle(bundler) {
gulp.src('./js/*.js')
    .pipe(concat('full.js'))
    .pipe(gulp.dest('./public/'))
gulp.src(['./css/fonts.css','./css/cursor.css','./css/menuAnimation.css','./css/index.css'])
    .pipe(concat('full.css'))
    .pipe(gulp.dest('./public/'))

    // Add options to add to "base" bundler passed as parameter
    bundler.bundle() // Start bundle
        .pipe(source(config.js.src)) // Entry point
        .pipe(buffer()) // Convert to gulp pipeline
        .pipe(rename(config.js.outputFile)) // Rename output from 'main.js'
        //   to 'bundle.js'
        .pipe(sourceMaps.init({
            loadMaps: true
        })) // Strip inline source maps
        .pipe(sourceMaps.write(config.js.mapDir)) // Save source maps to their
        //   own directory
        .pipe(gulp.dest(config.js.outputDir)) // Save 'bundle' to build/
        .pipe(livereload()); // Reload browser if relevant
}
gulp.task('bundle', function() {
        var bundler = browserify(config.js.src) // Pass browserify the entry point
            //.transform(coffeeify) //  Chain transformations: First, coffeeify . . .
            .transform(babelify, {
                presets: ['es2015']
            }); // Then, babelify, with ES2015 preset
        bundle(bundler); // Chain other options -- sourcemaps, rename, etc.
    })
    // Where gulp is watching
gulp.task('watch', function() {
    "use strict";
    gulp.watch('./js/*.js', ['bundle']),
        gulp.watch('./css/*.css', ['bundle']),
        gulp.watch('./*.html', ['bundle']);
});
gulp.task('default', ['watch']);

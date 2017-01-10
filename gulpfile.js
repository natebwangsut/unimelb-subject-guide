"use strict";

////////////////////////////////////////////////////////////////////////////////

// Requirements (Dependency) of the projects
const gulp = require('gulp'),
    ts = require('gulp-typescript'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    tsify = require('tsify');

// Constants for paths
const paths = {
    src: './src',
    output: './dist'
}

////////////////////////////////////////////////////////////////////////////////

gulp.task('default', function() {
    return browserify('src/main.ts')
        .plugin(tsify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(paths.output))
})

////////////////////////////////////////////////////////////////////////////////

// Tasks Constants
const copyHtmlTask = "copy-html";

////////////////////////////////////////////////////////////////////////////////

function copyTask() {
    return gulp.src(paths.src)
        .pipe(gulp.dest(paths.output));
}

////////////////////////////////////////////////////////////////////////////////

gulp.task("copy-html", copyTask);
"use strict";

////////////////////////////////////////////////////////////////////////////////

// Requirements (Dependency) of the projects
const gulp = require("gulp"),
    browserify = require("browserify"),
    source = require('vinyl-source-stream'),
    watchify = require("watchify"),
    tsify = require("tsify"),
    gutli = require("gulp-util"),
    paths = {
        pages: ['src/*.html']
    };

////////////////////////////////////////////////////////////////////////////////

// Tasks Constants
const copyHtmlTask = "copy-html";

////////////////////////////////////////////////////////////////////////////////

var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify));

////////////////////////////////////////////////////////////////////////////////

function bundle() {
    return watchedBrowserify
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest("dist"));
}

function copyTask() {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
}

////////////////////////////////////////////////////////////////////////////////

gulp.task("default", copyTask);
gulp.task("copy-html", copyTask);
gulp.task("watch", ["copy-html"], bundle)

watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutli.log);
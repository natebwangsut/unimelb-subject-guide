var gulp = require("gulp");
var browserify = require("browserify");
var source = require("source");
var tsify = require("tsify");
var path = {
    pages: [
        'src/*.html',
        'src/*.htm'
    ]
};

gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

gulp.task("default", function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {},
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest("dist"));
});

/*
var ts = require("gulp-typescript");

var tsProject = ts.createProject("tsconfig.json");

gulp.task("default", function() {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});
*/
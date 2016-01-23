/*eslint no-console:0, no-path-concat:0 */
"use strict";
var parameters = require("./config/parameters");
var gulp = require("gulp");
var browserify = require("gulp-browserify");
var babelify = require("babelify"); //eslint-disable-line
var runSequence = require("run-sequence");
var mocha = require("gulp-mocha");
var eslint = require("gulp-eslint");
var rename = require("gulp-rename");
var del = require("del");
require("babel/register");


gulp.task("client:images", function() {
    return gulp.src(parameters.client.imgSrcPath + "/**/*.*")
          .pipe(gulp.dest(parameters.client.distFolder + "/images"));
});

gulp.task("client:build-sources", function() {
    gulp.src(parameters.client.srcPath + "/index.jsx")
        .pipe(browserify({
            "debug": true,
            "transform": ["babelify"]
        }))
        .pipe(rename("app.js"))
        .pipe(gulp.dest(parameters.client.distFolder));

    gulp.src(parameters.client.srcPath + "/css/app.css")
        .pipe(gulp.dest(parameters.client.distFolder));

});


gulp.task("client:copy-resources", function() {
    gulp.src(parameters.client.clientAppPath + "/index.html")
    .pipe(gulp.dest(parameters.client.distFolder));
});

gulp.task("client:clean", function() {
    del(parameters.client.distFolder);
});

gulp.task("client:test", function() {
    return gulp.src([parameters.client.testPath + "**/**/*.jsx", parameters.client.testPath + "**/**/*.js"], { "read": false })
    .pipe(mocha());
});

gulp.task("client:build", function(callback) {
    runSequence("client:copy-resources", "client:build-sources", callback);
});


gulp.task("client:eslint", function() {
    return gulp.src([parameters.client.srcPath + "/**/*.jsx", parameters.client.testPath + "/**/*.js"])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

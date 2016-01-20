/*eslint no-console:0, no-path-concat:0 */
"use strict";
var parameters = require("./config/parameters");
var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var browserify = require("gulp-browserify");
var babelify = require("babelify"); //eslint-disable-line
var runSequence = require("run-sequence");
var mocha = require("gulp-mocha");
var eslint = require("gulp-eslint");
var exec = require("child_process").exec;
var replace = require("gulp-replace");
var argv = require("yargs").argv;
var rename = require("gulp-rename");
var del = require("del");
var minify = require("gulp-minify");
var cssnano = require("gulp-cssnano");
require("babel/register");


gulp.task("client:scss", function() {
    return gulp.src([parameters.client.scssSrcPath + "/**/*.scss"])
          .pipe(sass())
          .pipe(concat(parameters.client.cssMainFile))
          .pipe(cssnano())
          .pipe(gulp.dest(parameters.client.distFolder));
});


gulp.task("client:images", function() {
    return gulp.src(parameters.client.imgSrcPath + "/**/*.*")
          .pipe(gulp.dest(parameters.client.distFolder + "/images"));
});

gulp.task("client:build-sources", function() {
    let clientEnvironment = argv.client_environment || "development";

    gulp.src(parameters.client.srcPath + "/index.jsx")
        .pipe(browserify({
            "debug": true,
            "transform": ["babelify"]
        }))
        .pipe(replace("__CONTENT_DISCOVERY_ENVIRONMENT__", clientEnvironment))
        .pipe(rename("app.js"))
        .pipe(minify())
        .pipe(gulp.dest(parameters.client.distFolder));
});


gulp.task("client:copy-resources", function() {
    gulp.src(parameters.client.clientAppPath + "/index.html")
    .pipe(gulp.dest(parameters.client.distFolder));

    gulp.src(parameters.client.imgSrcPath + "/**/*.*")
        .pipe(gulp.dest(parameters.client.distFolder + "/images"));

    return gulp.src(parameters.client.fontsPath + "/**/*.*")
        .pipe(gulp.dest(parameters.client.distFolder + "/fonts"));
});

gulp.task("client:clean", function() {
    del(parameters.client.distFolder);
});

gulp.task("client:test", function() {
    return gulp.src([parameters.client.testPath + "**/**/*.jsx", parameters.client.testPath + "**/**/*.js"], { "read": false })
    .pipe(mocha());
});

gulp.task("client:build", function(callback) {
    runSequence("client:copy-resources", "client:build-sources", "client:scss", callback);
});

// gulp.task("client:build", ["client:scss", "client:javascript", "client:riot-tags", "client:copy-index-html"]);

gulp.task("client:watch", function() {
    this.cssFilesPath = parameters.client.scssSrcPath + "/**/*.scss";
    this.copyFilesPath = [parameters.client.imgSrcPath + "/**/*.*", parameters.client.fontsPath + "/**/*.*"];
    this.jsFilesPath = parameters.client.srcPath + "/**/*.{js,jsx}";
    this.testJsFilesPath = parameters.client.testPath + "/**/*.js";
    this.appPath = parameters.client.clientAppPath + "/index.html";
    gulp.watch(this.cssFilesPath, ["client:scss"]);
    gulp.watch(this.copyFilesPath, ["client:copy-resources"]);
    gulp.watch(this.jsFilesPath, ["client:build-sources"]);
    gulp.watch(this.testJsFilesPath, ["client:test"]);
    gulp.watch(this.appPath, ["client:copy-resources"]);
});

gulp.task("client:src-eslint", function() {
    return gulp.src([parameters.client.srcPath + "/**/*.jsx", parameters.client.srcPath + "/**/*.js"])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task("client:test-eslint", function() {
    return gulp.src([parameters.client.testPath + "/**/*.jsx", parameters.client.testPath + "/**/*.js"])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task("client:eslint", ["client:src-eslint", "client:test-eslint"]);
gulp.task("client:checkin-ready", ["client:eslint", "client:test"]);

gulp.task("client:test-coverage", (cb) => {
    exec("./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- --compilers js:babel/register -R spec " + parameters.client.testPath + "/**/**/**/*.jsx  " + parameters.client.testPath + "/**/**/**/*.js", (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task("test-coverage", (cb) => {
    exec("./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- --compilers js:babel/register -R spec " +
    parameters.server.testPath + "/**/**/**/**/**/*.js " +
    parameters.common.testPath + "/**/**/**/**/**/*.js " +
    parameters.client.testPath + "/**/**/**/**/**/*.js " + parameters.client.testPath + "/**/**/**/**/**/*.jsx ", (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

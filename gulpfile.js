'use strict';

var gulp = require('gulp');

var clean = require('gulp-clean');
var jshint = require('gulp-jshint');
var connect = require('gulp-connect');
var open = require('gulp-open');

gulp.task('connect', function () {
    connect.server({
        root: 'app/',
        port: 8080
    });
});

gulp.task('connect-dist', function () {
    connect.server({
        root: 'www/',
        port: 8080
    });
});

gulp.task('lint', function() {
    gulp.src(['./app/js/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('copy-components', function () {
    gulp.src('./app/**/*', { "base" : "./app" })
        .pipe(gulp.dest('./www'));
    gulp.src('./app/index.html')
        .pipe(gulp.dest('./www'));
});

gulp.task('clean', function() {
    gulp.src('./www/*')
        .pipe(clean({force: true}));
});

gulp.task('browse-app', function(){
    var options = {
        url: 'http://localhost:8080'
    };
    gulp.src('./app/index.html')
        .pipe(open('', options));
});

gulp.task('browse-www', function(){
    var options = {
        url: 'http://localhost:8080'
    };
    gulp.src('./www/index.html')
        .pipe(open('', options));
});

gulp.task('default', function() {
    gulp.start('lint', 'connect', 'browse-app');
});

gulp.task('dist', function() {
    gulp.start('copy-components');
});

gulp.task('test-dist', function() {
    gulp.start('dist', 'connect-dist', 'browse-www');
});


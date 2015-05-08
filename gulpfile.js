var gulp = require('gulp');

var clean = require('gulp-clean');
var jshint = require('gulp-jshint');
var connect = require('gulp-connect');

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
        .pipe(gulp.dest('www'));
});

gulp.task('clean', function() {
    gulp.src('./www/*')
        .pipe(clean({force: true}));
});

gulp.task('default', function() {
    gulp.start('lint', 'connect');
});

gulp.task('dist', function() {
    gulp.start('clean', 'copy-components');
});

gulp.task('test-dist', function() {
    gulp.start('dist', 'connect-dist');
});


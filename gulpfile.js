var gulp = require('gulp');
var mocha = require('gulp-spawn-mocha');
var options = JSON.parse(process.env.mochaopts ? process.env.mochaopts : null) || {reporter: 'mochawesome', timeout: 30000, slow: 15000, 'no-exit': true};

gulp.task('test', function () {
    return gulp.src('tests/**/*.js')
        .pipe(mocha(options))
        .on("error", console.warn.bind(console));
  });

gulp.task('smoke-test', function () {
    return gulp.src('tests/smoke/*.js')
        .pipe(mocha(options))
        .on("error", console.warn.bind(console));
  });

gulp.task('default', ['test']);

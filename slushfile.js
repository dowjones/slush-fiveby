var gulp = require('gulp');

gulp.task('generate', function () {
    return gulp.src(__dirname + "/**")
        .pipe(gulp.dest('./'))
        .on("error", console.warn.bind(console));
  });

gulp.task('default', ['generate']);

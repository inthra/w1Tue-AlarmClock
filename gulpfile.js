var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('jsBrowserify', function() {
  return browserify({ entries: ['./'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

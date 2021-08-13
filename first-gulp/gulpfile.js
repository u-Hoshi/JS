var gulp = require('gulp');

gulp.task('a', ['b'], () => {
  console.log('hello world');
});

gulp.task('b', () => {
  console.log('b');
});

// ver4の書き方
gulp.task('default', gulp.series(gulp.parallel('a', 'b')));

// ver3の書き方
// gulp.task('default', ['a', 'b']);

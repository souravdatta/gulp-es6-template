var gulp = require('gulp');
var babel = require('gulp-babel');
var exec = require('gulp-exec');
var del = require('del');

gulp.task('compile', function () {
  gulp.src('src/*.js')
      .pipe(babel({
        presets: 'babel-preset-es2015'
      }))
      .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
  del('dist/*');
});

gulp.task('default', ['compile'], function () {
  
});

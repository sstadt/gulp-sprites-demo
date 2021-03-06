
var gulp = require('gulp');
var svgstore = require('gulp-svgstore');
var inject = require('gulp-inject');

gulp.task('default', function () {
  var svgs = gulp.src('sprites/*.svg').pipe(svgstore({ inlineSvg: true }));

  function fileToString(filePath, file) {
    return file.contents.toString();
  }

  return gulp.src('./index.html')
    .pipe(inject(svgs, { transform: fileToString }))
    .pipe(gulp.dest('./'));
});

var gulp = require('gulp');
var templates = require('gulp-angular-templatecache');

var paths = {
  templates: [
    'ng-class/*.html',
    'ng-if/*.html',
    'ng-repeat/*.html',
    'ng-show-hide/*.html'
  ]
}
gulp.task('template', function () {
  return gulp.src(paths.templates)
    .pipe(templates())
    .pipe(gulp.dest('./'));
});


const gulp      = require("gulp");
const sass      = require("gulp-sass");
const uglify    = require('gulp-uglify');
const concat    = require('gulp-concat');
const watch     = require('gulp-watch')


// a task to generate the css with sass
gulp.task('css', function () {
  return gulp.src('./_includes/assets/css/sass/main.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    })
      .on('error', sass.logError))
    .pipe(gulp.dest('./_includes/assets/css'));
});
/*
  Watch folders for changes
*/
gulp.task("watch", function() {
  gulp.watch("./_includes/assets/css/sass/*.scss", gulp.parallel("css"));
});


/*
  Let's build this sucker.
*/
gulp.task('build', gulp.parallel(
  'css'
));

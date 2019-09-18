const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean-css');
var evilIcons = require("gulp-evil-icons");

// CSS task
function css() {
  return gulp
    .src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded',
    }))
    .pipe(autoprefixer({
      cascade: false,
    }))
    .pipe(clean())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/assets/css/'));
}

gulp.task('watch', () => gulp.watch('./src/scss/**/*.scss', gulp.series('css')));

exports.css = css;

gulp.task('evil', function () {
  return gulp.src('dist/home.html')
    .pipe(evilIcons())
    .pipe(gulp.dest('build'));
});
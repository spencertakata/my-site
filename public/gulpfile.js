var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concatcss = require('gulp-concat-css');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var imagemin = require('gulp-imagemin'),
    svgmin = require('gulp-svgmin');
const htmlmin = require('gulp-htmlmin');

// CSS concatenation + minification task
gulp.task('compressCSS', function() {
  return gulp.src('./src/*.css')
    .pipe(concatcss('style.min.css'))
    .pipe(minifycss())
    .pipe(gulp.dest('./css'));
});

// JS concatenation + minification task
gulp.task('compressJS', function() {
  return gulp.src('.src/js/*.js')
    .pipe(jshint()).pipe(jshint.reporter("default"))
    .pipe(uglify())
    .pipe(concat('scripts.min.js'))
    .pipe(gulp.dest('/js'));
});


// Image optimization task
gulp.task('img', function () {
  return gulp.src('src/img/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./img'));
});

// SVG optimization task
gulp.task('svg', function () {
  return gulp.src('src/svg/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('/svg'));
});

//Minify HTML
gulp.task('minify', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./'));
});

gulp.task('default', gulp.parallel('compressCSS', 'compressJS', 'img', 'svg', 'minify'));

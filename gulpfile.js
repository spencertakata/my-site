var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var purify = require('gulp-purifycss');

gulp.task('nunjucks', function () {
    //Get .html and .njk files in pages folder
    return gulp.src('public/stage/*.njk')
    // Render template with nunjucksRender
        .pipe(nunjucksRender({
            path: ['public/templates']
        }))
    // output files in public folder
    .pipe(gulp.dest('public'))
});

gulp.task('css', function() {
    return gulp.src('./public/bootstrap-4.4.1-dist/css/bootstrap.css')
    .pipe(purify(['.public/**/*.js', './public/*.html']))
    .pipe(gulp.dest('./public/css'))
})

//Minify HTML
/* gulp.task('minify', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./'));
}); */

gulp.task('default', gulp.parallel('nunjucks', 'css'));

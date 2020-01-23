var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('default', function () {
    //Get .html and .njk files in pages folder
    return gulp.src('public/stage/*.njk')
    // Render template with nunjucksRender
        .pipe(nunjucksRender({
            path: ['public/templates']
        }))
    // output files in public folder
    .pipe(gulp.dest('public'))
});

//Minify HTML
/* gulp.task('minify', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./'));
}); */

//gulp.task('default', gulp.parallel('img', 'svg', 'nunjucksRender'));

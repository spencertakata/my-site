const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const purify = require('gulp-purifycss');


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

gulp.task('default', gulp.parallel('nunjucks', 'css'));

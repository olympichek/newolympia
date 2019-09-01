const gulp = require('gulp');
const sass = require('gulp-sass');

const webpackConfig = require('./webpack.config.js');
const webpackStream = require('webpack-stream');
webpackConfig.mode = "development";

gulp.task('css', async function () {
    gulp.src('./scss/**/*.scss')
        .pipe(sass({
            errLogToConsole: true,
            imagePath: './img/'
        }).on('error', sass.logError))
        .pipe(gulp.dest('../public/css'));
});

gulp.task('img', async function () {
    gulp.src(['./img/**/*.*'])
        .pipe(gulp.dest('../public/img'));
    gulp.src(['./favicon/**/*.*'])
        .pipe(gulp.dest('../public/favicon'));
});

gulp.task('js', async function () {
    gulp.src('./js/router/load.js')
        .pipe(webpackStream(webpackConfig))
        .pipe(gulp.dest('../public/js'));
});

gulp.task('dev', gulp.parallel('css', 'img', 'js'));

gulp.task('watch', async function () {
    gulp.watch('./scss/**/*.*', gulp.parallel('css'));
    gulp.watch('./js/**/*.*', gulp.parallel('js'));
    gulp.watch('./img/**/*.*', gulp.parallel('img'));
    gulp.watch('./favicon/**/*.*', gulp.parallel('img'));
});
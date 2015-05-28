'use strict';
var gulp = require('gulp');
var react = require('gulp-react');

gulp.task('jsx2js', function(){
   return gulp.src('./src/js/**/*.jsx')
       .pipe(react())
       .pipe(gulp.dest('./dist/'));
});
gulp.task('index2dist', function(){
   return gulp.src('./src/index.html')
       .pipe(gulp.dest('./dist/'));
});
gulp.task('default', ['jsx2js', 'index2dist']);

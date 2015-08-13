var gulp = require('gulp'), 
	gutil = require('gulp-util'), 
	sourcemaps = require('gulp-sourcemaps'), 
	concat = require('gulp-concat'), 
	uglify = require('gulp-uglify'), 
	connect = require('gulp-connect'), 
	open = require('gulp-open');

gulp.task('build', function() {
	return gulp.src('upscroller.js')
			.pipe(sourcemaps.init())
			.pipe(concat('upscroller.min.js'))
			.pipe(uglify())
			.pipe(sourcemaps.write()).pipe(gulp.dest('build'));
});

gulp.task('open', function() {
	return gulp.src('./demo/index.html').pipe(open({
		uri : 'http://localhost:3000/demo'
	}));
});

gulp.task('connect', function() {
	connect.server({
		port : '3000'
	});
});

gulp.task('server', [ 'connect', 'open' ]);

var gulp = require('gulp'), 
	gutil = require('gulp-util'), 
	sourcemaps = require('gulp-sourcemaps'), 
	concat = require('gulp-concat'), 
	uglify = require('gulp-uglify'), 
	connect = require('gulp-connect'), 
	open = require('gulp-open'),
	minifyCss = require('gulp-minify-css');

gulp.task('build', function() {
	gulp.src(['src/**/*'])
	    .pipe(gulp.dest('build'));
	
	gulp.src('src/framework7.upscroller.js')
	    .pipe(sourcemaps.init())
	    .pipe(concat('framework7.upscroller.min.js'))
	    .pipe(uglify())
	    .pipe(sourcemaps.write()).pipe(gulp.dest('build'));
	
	gulp.src('src/framework7.upscroller.css')
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(concat('framework7.upscroller.min.css'))
        .pipe(gulp.dest('build'));
});

gulp.task('dist', function() {
	gulp.src([
	    'build/**/*'
	])
    .pipe(gulp.dest('dist'));
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

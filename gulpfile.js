var gulp = require('gulp'), 
	gutil = require('gulp-util'), 
	sourcemaps = require('gulp-sourcemaps'), 
	concat = require('gulp-concat'), 
	uglify = require('gulp-uglify'), 
	minifyCss = require('gulp-minify-css'),
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload;

gulp.task('browser-sync', function() {
	browserSync.init({
			server: {
					baseDir: "./"
			}
	});
});

gulp.task('dist', function() {
	gulp.src('src/framework7.upscroller.js')
	    .pipe(sourcemaps.init())
	    .pipe(concat('framework7.upscroller.min.js'))
	    .pipe(uglify())
			.pipe(sourcemaps.write()).pipe(gulp.dest('dist'));

	gulp.src('src/framework7.upscroller.css')
			.pipe(minifyCss({compatibility: 'ie8'}))
			.pipe(concat('framework7.upscroller.min.css'))
			.pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
	gulp.watch([
		'src/framework7.upscroller.css',
		'src/framework7.upscroller.js',
		'index.html',
	],
	reload);
});

gulp.task('default', ['dist', 'browser-sync', 'watch']);

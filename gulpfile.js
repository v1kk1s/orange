const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const glob = require('glob');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

const connect = require('gulp-connect');

var config = {
	port: 9005,
	devBaseUrl: 'http://localhost',
	namespace: 'start',
	sourceBundle: 'all.js',
	paths: {
		html: './src/*.html',
		js: './src/**/*.js',
		scss: './src/**/*.scss',
		dist: './dist',
		mainJs: './src/app/main.js'
	}
};

gulp.task('connect', function () {
	connect.server({
		root: ['dist'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});

gulp.task('html', function () {
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});

gulp.task('js', function () {
	return rebundle(
		browserify({
			entries: glob.sync(config.paths.js),
			debug: true
		}));
});

function rebundle(b) {
	return b
		.require(config.paths.mainJs, { expose: config.namespace })
		.on('error', function (err) {
			console.error(err);
			this.emit('end');
		})
		.transform(babelify)
		.bundle()
		.pipe(source(config.sourceBundle))
		.pipe(buffer())
		.pipe(sourcemaps.init())
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest(config.paths.dist));
}

gulp.task('scss', function() {
	gulp.src('src/scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass()
			.on('error', sass.logError))
		.pipe(concat('style.css'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist'))
});

gulp.task('watch', function () {
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js']);
	gulp.watch(config.paths.scss, ['scss']);
});

gulp.task('default', ['html', 'js', 'scss', 'connect', 'watch']);
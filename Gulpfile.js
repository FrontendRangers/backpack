/**
*
* Backpack Configuration
* @version: 0.0.1
* @author: Benoit Deziel
*
**/

/*=================================
=            Variables            =
=================================*/

/*==========  Gulp requirements  ==========*/

var gulp         = require('gulp');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber      = require('gulp-plumber');
var cp           = require('child_process');
var browserSync  = require('browser-sync');
var reload       = browserSync.reload;

/*-----  End of Variables  ------*/

/*==================================
=            Gulp Tasks            =
==================================*/

/*==========  Messages  ==========*/

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/*==========  Jekyll  ==========*/

gulp.task('jekyll-build', ['styles', 'styles-sg'], function (done) {
	browserSync.notify(messages.jekyllBuild);
		return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
		.on('close', done);
});

gulp.task('jekyll-rebuild', ['styles', 'styles-sg', 'jekyll-build'], function () {
	browserSync.reload();
});

gulp.task('browser-sync', ['styles', 'jekyll-build'], function() {
	browserSync({
		server: {
			baseDir: '_docs',
		},
		open: false
	});
});

/*==========  Styles  ==========*/

gulp.task('styles', function() {
	browserSync.notify('<span style="color: grey">Running:</span> Styles compiling');
	return gulp.src('./assets/_scss/*.scss')
	 	.pipe(plumber())
		.pipe(sass())
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest('./docs/assets/css'))
		.pipe(gulp.dest('./assets/css'))
		.pipe(reload({stream:true}));
});

gulp.task('styles-sg', function() {
	browserSync.notify('<span style="color: grey">Running:</span> Styleguide styles compiling');
	return gulp.src('./docs/assets/guidebook/_scss/*.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest('./docs/assets/css'))
		.pipe(reload({stream:true}));
});

/*==========  Scripts  ==========*/

gulp.task('scripts', function(){

});

/*-----  End of Gulp Tasks  ------*/

/*=======================================
=            Version Bumping            =
=======================================*/

function inc(importance) {
	// get all the files to bump version in
	return gulp.src(['./package.json', './bower.json'])
		// bump the version number in those files
		.pipe($.bump({type: importance}))
		// save it back to filesystem
		.pipe(gulp.dest('./'))
		// commit the changed version number
		.pipe($.git.commit('bumps package version'))

		// read only one file to get the version number
		.pipe($.filter('package.json'))
		// **tag it in the repository**
		.pipe($.tag_version());
}

gulp.task('patch', function() { return inc('patch'); })
gulp.task('feature', function() { return inc('minor'); })
gulp.task('release', function() { return inc('major'); })

/*-----  End of Version Bumping  ------*/

/*=============================
=            Tasks            =
=============================*/

// Main tasks
gulp.task('default', ['dev']);

// Run the styleguide
gulp.task('dev', ['styles', 'styles-sg', 'browser-sync'], function(){
	gulp.watch('./assets/_scss/backpack/**/*.scss', ['styles', 'jekyll-rebuild']);
	gulp.watch('./docs/assets/guidebook/_scss/*.scss', ['styles-sg', 'jekyll-rebuild']);
	gulp.watch(['./docs/index.html', './docs/_layouts/*.html', './docs/_includes/*.html', './docs/**/*.html'], ['jekyll-rebuild']);
});

// Generate files for production
gulp.task('prod', ['styles', 'serve']);


/*-----  End of Tasks  ------*/


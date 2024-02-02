'use strict'

/**
 * Import config file and required resources.
 */
import config from './../config';
import gulp from 'gulp';

/**
 * Copy css Fontawesome.
 */
function copyCssFontawesome()
{
	return gulp
		.src(config.paths.fontawesome.css)
		.pipe(gulp.dest(config.paths.fontawesome.dest + "css/"));
}

exports.copyCssFontawesome = copyCssFontawesome;

/**
 * Copy webfonts Fontawesome.
 */
function copyWebfontsFontawesome()
{
	return gulp
		.src(config.paths.fontawesome.webfonts)
		.pipe(gulp.dest(config.paths.fontawesome.dest + "webfonts/"));
}

exports.copyWebfontsFontawesome = copyWebfontsFontawesome;

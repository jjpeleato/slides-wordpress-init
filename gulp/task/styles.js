'use strict';

/**
 * Import config file and required resources.
 */
import config from './../config';
import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import nodeSass from 'node-sass';
import noop from 'gulp-noop';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import stylelint from 'gulp-stylelint';
import uglifycss from 'gulp-uglifycss';

const sass = gulpSass(nodeSass);

/**
 * Validate SCSS according Stylint (https://stylelint.io/).
 * @returns {*}
 */
function validateScss()
{
	return gulp
		.src(config.paths.sassAssets.src)
		.pipe(config.lintcss === true ? stylelint(config.options.stylelint) : noop());
}

exports.validateScss = validateScss;

/**
 * Compile SASS to CSS. Not concat.
 * @returns {*}
 */
function css()
{
	return gulp
		.src(config.paths.sassAssets.src)
		.pipe(sourcemaps.init())
		.pipe(sass(config.options.sass).on('error', sass.logError))
		.pipe(config.environment === 'production' ? uglifycss(config.options.uglifyCss) : noop())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.paths.sassAssets.dest));
}

exports.css = css;

/**
 * Copy CSS assets to public directory.
 * @type {function(): *}
 */
function cssAssets()
{
	return gulp
		.src(config.paths.sassAssets.vendor)
		.pipe(uglifycss(config.options.uglifyCss))
		.pipe(gulp.dest(config.paths.sassAssets.destVendor));
}

exports.cssAssets = cssAssets;

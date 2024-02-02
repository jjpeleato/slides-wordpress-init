'use strict';

/**
 * Import config file and required resources.
 */
import config from './../config';
import gulp from 'gulp';

/**
 * Copy fonts assets to public directory.
 */
function fontAssets()
{
	return gulp
		.src(config.paths.fontAssets.src)
		.pipe(gulp.dest(config.paths.fontAssets.dest));
}

exports.fontAssets = fontAssets;

'use strict';

/**
 * Import config file and required resources.
 */
import config from './../config';
import del from 'del';

/**
 * Delete all files.
 */
function clean()
{
	return del([
		config.paths.sassAssets.destVendor,
		config.paths.sassAssets.dest,
		config.paths.jsAssets.destVendor,
		config.paths.jsAssets.dest,
		config.paths.imgAssets.destVendor,
		config.paths.imgAssets.dest,
		config.paths.fontawesome.dest,
	]);
}

exports.clean = clean;

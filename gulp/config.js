'use strict';

/* Const for environment */
const environment = process.env.NODE_ENV || 'development';

/* Activate or desactivate Stylint on CSS task. true: activate | false: desactivate */
const lintcss = true;
const jshint = true;

/* Paths */
const theme = './public/assets/';
const paths = {
	sassAssets: {
		src: [
			'./assets/scss/**/*.scss'
		],
		srcCritical: [
			'./assets/scss/critical.scss'
		],
		vendor: [
			'./node_modules/reveal.js/dist/reset.css',
			'./node_modules/reveal.js/dist/reveal.css',
			'./node_modules/reveal.js/dist/theme/white.css',
			'./node_modules/reveal.js/plugin/highlight/monokai.css',
		],
		dest: theme + 'css/',
		destVendor: theme + 'css/vendor/'
	},
	jsAssets: {
		src: [
			'./assets/js/custom.js'
		],
		vendor: [
			'./node_modules/reveal.js/dist/reveal.js',
			'./node_modules/reveal.js/plugin/notes/notes.js',
			'./node_modules/reveal.js/plugin/markdown/markdown.js',
			'./node_modules/reveal.js/plugin/highlight/highlight.js',
			'./node_modules/reveal.js/plugin/zoom/zoom.js',
		],
		map: [
			'./node_modules/reveal.js/dist/reveal.js.map',
		],
		dest: theme + 'js/',
		destVendor: theme + 'js/vendor/'
	},
	fontAssets: {
		src: [
			'./node_modules/reveal.js/dist/theme/fonts/**/*'
		],
		dest: theme + 'css/vendor/fonts/'
	},
	imgAssets: {
		src: [
			'./assets/img/**/*.svg',
			'./assets/img/**/*.png',
			'./assets/img/**/*.jpeg',
			'./assets/img/**/*.jpg',
			'./assets/img/**/*.gif',
			'./assets/img/**/*.ico'
		],
		vendor: [],
		dest: theme + 'img/',
		destVendor: theme + 'img/vendor/'
	},
	fontawesome: {
		css: [
			'./node_modules/@fortawesome/fontawesome-free/css/*',
		],
		webfonts: [
			'./node_modules/@fortawesome/fontawesome-free/webfonts/*',
		],
		dest: theme + "fontawesome/",
	}
};

/* Options */
const options = {
	stylelint: {
		reporters: [
			{
				formatter: 'string',
				console: true
			}
		]
	},
	sass: {
		outputStyle: 'compressed', // output_style = expanded or nested or compact or compressed
		precision: 10
	},
	uglifyCss: {
		"maxLineLen": 80,
		"uglyComments": false
	}
};

/* Exports */
exports.environment = environment;
exports.lintcss = lintcss;
exports.jshint = jshint;
exports.paths = paths;
exports.options = options;

var gulp = require('gulp');
var webpack = require('webpack');


gulp.task('scripts', function(callback) {
	webpack(require('../../webpack.config.js'), function(err, stats) {

		if (err) {
			console.log(error.toString());
		}
		console.log(stats.toString());
		callback();
	});
});
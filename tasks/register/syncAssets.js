module.exports = function (grunt) {
	grunt.registerTask('syncAssets', [
		'jst:dev',
		'less:dev',
    'sass',
		'sync:dev',
		'coffee:dev'
	]);
};

module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'jst:dev',
    'sass',
		'less:dev',
		'copy:dev',
		'coffee:dev'
	]);
};

module.exports = function(grunt) {

grunt.config.set('sass', {
    dev: {                            // Target
      options: {                       // Target options
        style: 'expanded'
      },
      files: {                         // Dictionary of files
        'assets/styles/styles.css': 'assets/styles/styles.scss',       // 'destination': 'source'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
};


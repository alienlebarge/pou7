module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),





    sass: {
      dist: {
        options: {
          style: 'compressed',
          precision: '9'
        },
        files: {
          'css/pou7.min.css': 'css/pou7.scss'
        },
      },
      dev: {
        options: {
          style: 'expanded'
        },
        files: {
          'css/pou7.css': 'css/pou7.scss'
        },
      }
    }





  });

  // Load the plugin that provides the "sass" task.
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['sass']);

};

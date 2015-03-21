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
    },





    shell: {
      jekyll: {
        command: 'jekyll build'
      }
    },





    'gh-pages': {
      options: {
        base: '_site'
      },
      src: ['**']
    }





  });

  // Load the plugin that provides the "sass" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  // Load the plugin that provides the "shell" task.
  grunt.loadNpmTasks('grunt-shell');
  // Load the plugin that provides the "gh-pages" task.
  grunt.loadNpmTasks('grunt-gh-pages');

  // Tasks
  grunt.registerTask('default', ['sass', 'shell']);
  grunt.registerTask('publish', ['sass', 'shell', 'gh-pages']);

};

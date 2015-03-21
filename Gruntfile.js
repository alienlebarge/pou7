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





    browserSync: {
      bsFiles: {
        src : ['_site/**/*.css', '_site/**/*.html']
      },
      options: {
        watchTask: true,
        server: {
          baseDir: "./_site/"
        }
      }
    },





    watch: {
      css: {
        files: ['css/**/*.scss'],
        tasks: ['sass']
      },
      jekyll: {
        files: ['_posts/*.md', '_include/*.*', '_layouts/*.*', '*.html', '*.md'],
        tasks: ['shell']
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
  // Load the plugin that provides the "shell" task.
  grunt.loadNpmTasks('grunt-browser-sync');
  // Load the plugin that provides the "shell" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Load the plugin that provides the "gh-pages" task.
  grunt.loadNpmTasks('grunt-gh-pages');

  // Tasks
  grunt.registerTask('default', ['sass', 'shell', 'browserSync', 'watch']);
  grunt.registerTask('publish', ['sass', 'shell', 'gh-pages']);

};

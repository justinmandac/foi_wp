module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      dev: {
        options: {
          config: 'config.rb'
        }
      },
      dist: {
        options: {
          config: 'config-dist.rb'
        }
      }
    },
    concat: {
      dist: {
        files: {
          'style.css' : ['info.css', 'stylesheets/main.css'],
          'stylesheets/tracker-styles.css': ['stylesheets/hopscotch.min.css','stylesheets/jquery.sidr.light.css','stylesheets/tracker.css']

        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['compass:dev', 'concat']);
  grunt.registerTask('dist', ['compass:dist', 'concat']);

}

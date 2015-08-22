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
        src: ['info.css', 'stylesheets/main.css'],
        dest: 'style.css'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['compass:dev', 'concat']);
  grunt.registerTask('dist', ['compass:dist', 'concat']);

}

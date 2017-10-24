module.exports = function(grunt) {

  grunt.initConfig({
    
    jshint: {
      all: ['js/*.js']
    },
    
    sass: {
      	options: {
	        sourceMap: true
	    },
	    dist: {
	        files: {
	          'css/style.css': 'sass/style.scss'
	        }
	    }
    },

    watch: {
    	scripts: {
        files: ['sass/style.scss'],
        tasks: ['sass'],
        options: {
            spawn: false,
        },
    },

}
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'sass','watch']);

};
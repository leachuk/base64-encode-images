module.exports = function(grunt) {

    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        inline: {
            dist: {
                src: 'src/sample.html',
                dest: 'target/index.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-inline');

    grunt.registerTask('default', ['inline']);
};
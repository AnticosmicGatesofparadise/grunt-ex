const { option } = require("grunt");

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            dev: {
                files: {
                    'dev/styles/main.css': "./src/styles/main.less"
                }
            },
            prod: {
                options: {
                    compress: true
                },
                files: {
                    'dist/styles/main.min.css': './src/styles/main.less'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', ['less:prod', 'less:dev', 'uglify'])
}
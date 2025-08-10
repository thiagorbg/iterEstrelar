module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less : {
            development : {
                files : {
                    'dev/styles/main.css' : 'src/styles/*less'
                }
            },
            production : {
                options : {
                    compress : true,
                },
                files : {
                    'dist/styles/main.min.css' : 'src/styles/*less'
                }
            }
        },
        // Example task: Uglify JS files
        uglify: {
            options: {
                mangle: true,
                compress: true,
                sourceMap: true
            },
            build: {
                files: [{
                    expand: true,
                    cwd: 'src/js',
                    src: '*.js',
                    dest: 'dist/js',
                    ext: '.min.js'
                }]
            }
        },

        // Example task: Watch files for changes
        watch: {
            less: {
                files: ['src/styles/**/*less'],
                tasks: ['less:development'],
            },
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task(s).
    grunt.registerTask('default', ['watch','uglify']);
    grunt.registerTask('build', ['less:production']);
};
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
                    'dist/js/main.js' : 'src/main.js'
                }]
            }
        },

        // Example task: Watch files for changes
        watch: {
            less: {
                files: ['src/styles/**/*less'],
                tasks: ['less:development'],
            },
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/imagens2/',
                    src: ['**/*.{png,jpg,jpeg,gif,svg,avif,mp4,webp}'],
                    dest: 'dist/imagens/'
                }]
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // Default task(s).
    grunt.registerTask('default', ['watch','uglify']);
    grunt.registerTask('build', ['less:production','uglify','imagemin']);
};
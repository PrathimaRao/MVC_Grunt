module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),      
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'                
            },
            
            my_target:{
                options: {
                    beautify: false
                 },
                 files: {
                     'output/js/myApp.js': ['src/Packages.js'
                                        , 'src/startup.js'
                                        , 'src/com/art/mvc/core.js'
                                        , 'src/com/art/mvc/utils/Note.js'
                                        , 'src/com/art/mvc/controller/controller1.js'
                                        , 'src/com/art/mvc/model/model1.js'
                                        ,'src/com/art/mvc/view/view1.js'
                                        ]                
             }
         }          
        },
        qunit: {
            files: ['funcunit/**/funcUnit.html']
        },
        clean: {
         build: {
                src: ["dest/*.js"]
            }
        },	
        copy: {
          main: {
            files: [
              // includes files within path                  
              {expand: true, flatten: true, src: ['dest/**'], dest: 'build/', filter: 'isFile'}        
            ]
          }
        },
        jshint: {
            files: ['Gruntfile.js', 'src/*.js', 'test/**/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'qunit']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');       
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    //To execute
    //1. Jshint(to validate js)
    //2. Execute test cases with qunit (to execute customized test cases)
    //3. Uglify at last (to generate minified files after all validations)
    //grunt.registerTask('default', ['jshint', 'qunit', 'uglify']);
    //cmd "grunt minify"
    grunt.registerTask('minify', ['uglify']);

    //cmd "grunt all"
    grunt.registerTask('all', ['jshint', 'qunit', 'uglify']);

    //cmd "grunt validateonly"
    grunt.registerTask('validateonly', ['jshint', 'qunit']);

    //cmd "grunt" (default one)
    grunt.registerTask('default', ['jshint', 'qunit', 'uglify']);

    grunt.registerTask('delete', ['clean']);

    grunt.registerTask('deploy', ['copy']);
    var targetVal = grunt.option('target') || 'dev';
    console.log(targetVal);
};
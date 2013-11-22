/* ==========================================================================
   TODO:
   [x] LiveReload
   [x] Compass
   [x] Clean
   [x] Minification
   [x] Bower
   [ ] Sprites - http://emlyn.net/posts/spritesmith-tutorial
   [ ] Image compression - https://github.com/gruntjs/grunt-contrib-imagemin
   [x] Uglify
   [ ] Grunticon - Not working anymore
   [x] Dev - Temp (Server) - Build
   [ ] Autoprefixer
   [ ] Versions
   [ ] Usemin ?
   [ ] Concurrent ? For building speed
   [ ] Readme File
   [ ] Generator

   ========================================================================== */

'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  var app = {
    src: './src',
    dist: './build',
    tmp: './.www',
    livereload_port: 35729
  };

  grunt.initConfig({
    app: app,

    // Create a server
    connect: {
      options: {
        port: 3456,
        livereload: '<%= app.livereload_port %>',
        hostname: 'localhost'
      },
      dev: {
        options: {
          open: true,
          base: '<%= app.tmp %>'
        }
      },
      build: {
        options: {
          open: true,
          base: '<%= app.dist %>'
        }
      }
    },

    // Watch changes on files
    watch: {
      options: {
        livereload: true,
      },
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['jshint:gruntfile', 'build:dev']
      },
      assemble: {
        files: ['<%= app.src %>/{,**/}*.hbs'],
        tasks: ['assemble:dev']
      },
      css: {
        files: ['<%= app.src %>/assets/css/{,**/}*.{scss,sass}'],
        tasks: ['styles:dev']
      },
      scripts: {
        files: ['<%= app.src %>/js/{,*/}*.js'],
        tasks: ['scripts:dev']
      },
      images: {
        files: ['<%= app.src %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}']
      }
    },

    assemble: {
      options: {
        flatten: true,
        data: ['<%= app.src %>/templates/data/*.{json,yml}'],
        partials: '<%= app.src %>/templates/partials/*.hbs',
        layoutdir: '<%= app.src %>/templates/layouts',
        layout: 'default.hbs',
      },
      dev: {
        src: ['<%= app.src %>/*.hbs'],
        dest: '<%= app.tmp %>/'
      }
    },

    // Clean the output folder
    clean: {
      build: '<%= app.dist %>',
      temp: '<%= app.tmp %>'
    },

    // Verify lowercase filenames
    verifylowercase: {
      all: {
        src: ['<%= app.src %>/**/*']
      }
    },

    // Copy other files
    copy: {
      // build: {
      //   files: [{
      //     expand: true,
      //     dot: true,
      //     cwd: '<%= app.src %>',
      //     dest: '<%= app.dist %>',
      //     src: [
      //       '*.{ico,txt}',
      //       '.htaccess',
      //       'images/!(svg-src)/**',
      //       'styles/fonts/*',
      //       'webfonts/*'
      //     ]
      //   }]
      // },
      js: {
        files: [{
          expand: true,
          src: ['js/**/*.js'],
          cwd: '<%= app.src %>',
          dest: '<%= app.tmp %>',
          ext: '.js'
        }]
      }
    },

    // Generate CSS from SASS
    compass: {
      dev: {
        options: {
          sassDir: '<%= app.src %>/assets/css',
          cssDir: '<%= app.tmp %>/assets/css',
        },
      },
      build: {
        options: {
          sassDir: '<%= app.src %>/assets/css',
          cssDir: '<%= app.dist %>/assets/css',
          environment: 'production'
        },
      }
    },

    // Create icons from svg files (Not working...Guess why!)
    grunticon: {
      dev: {
        options: {
          src: '<%= app.src %>/images/svg-src/',
          dest: '<%= app.src %>/images/svg/'
        }
      },
      build: {
        options: {
          src: '<%= app.src %>/images/svg-src/',
          dest: '<%= app.dist %>/images/svg/'
        }
      }
    },

    // Check our JS
    jshint: {
      dev: {
        files: '<%= app.src %>/js/**/*.js'
      },
      gruntfile: {
        files: 'Gruntfile.js'
      }
    },

    // Minimify our JS
    uglify: {
      build: {
        files: [{
          expand: true,
          src: ['js/**/*.js'],
          cwd: '<%= app.src %>',
          dest: '<%= app.dist %>',
          ext: '.min.js'
        }]
      }
    },

    // Minify the outputted html
    htmlmin: {
      build: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          src: ['**/*.html', '!images/**/*.html'],
          cwd: '<%= app.dist %>',
          dest: '<%= app.dist %>',
        }]
      }
    },

    'gh-pages': {
      options: {
        base: '<%= app.tmp %>',
        message: 'Auto-generated commit'
      },
      src: '**/*'
    },

    // To check
    bower: {
      options: {
        exclude: ['modernizr']
      },
      all: {
        rjsConfig: '<%= app.src %>/scripts/main.js'
      }
    },
    requirejs: {
      build: {
        options: {
          baseUrl: '<%= app.src %>/js',
          optimize: 'none',
          preserveLicenseComments: false,
          useStrict: true,
          wrap: true
        }
      }
    },
  });

  // Load plugins from package.json
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.loadNpmTasks('assemble');

  // Styles Tasks
  grunt.registerTask('styles:dev', ['compass:dev']);
  grunt.registerTask('styles:build', ['compass:build']);

  // Scripts Tasks
  grunt.registerTask('scripts:dev', ['jshint:dev', 'copy:js']);
  grunt.registerTask('scripts:build', ['jshint:dev', 'uglify:build']);

  // Images Tasks
  grunt.registerTask('images:dev', []);
  grunt.registerTask('images:build', []);

  // Build Tasks
  grunt.registerTask('build:dev', ['verifylowercase', 'clean:temp', 'assemble:dev', 'images:dev', 'styles:dev', 'scripts:dev']);
  grunt.registerTask('build:build', ['verifylowercase', 'clean:build', 'htmlmin:build', 'images:build', 'styles:build', 'scripts:build']);

  // Main Tasks
  grunt.registerTask('default', ['server']);
  grunt.registerTask('server', ['build:dev','connect:dev', 'watch']);
  grunt.registerTask('build', ['build:build', 'connect:build', 'watch']);
  grunt.registerTask('publish', ['build:dev', 'gh-pages']);

};

/* ==========================================================================
   Guidebook configuration
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
    tmp: './.www'
  };

  grunt.initConfig({
    app: app,

    // Create a server
    connect: {
      options: {
        port: 3456,
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
        livereload: true
      },
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['build:dev']
      },
      assemble: {
        files: ['<%= app.src %>/pages/{,**/}*.hbs'],
        tasks: ['newer:assemble:dev']
      },
      templates: {
        files: ['<%= app.src %>/templates/{layouts,partials}/{,**/}*.hbs'],
        tasks: ['assemble:dev']
      },
      css: {
        files: ['<%= app.src %>/{assets,guidebook}/css/{,**/}*.{scss,sass}'],
        tasks: ['styles:dev']
      },
      scripts: {
        files: ['<%= app.src %>/{assets,guidebook}/js/{,**/}*.js'],
        tasks: ['scripts:dev']
      },
      images: {
        files: ['<%= app.src %>/media/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}', '<%= app.src %>/assets/icons/{,*/}*.{png,jpg,jpeg,gif,webp,svg}']
      }
    },

    // Assemble all the pages
    assemble: {
      options: {
        flatten: true,
        data: ['<%= app.src %>/templates/data/*.{json,yaml}'],
        partials: ['<%= app.src %>/templates/partials/*.hbs'],
        layoutdir: '<%= app.src %>/templates/layouts/',
        layout: 'default.hbs',
        assets: 'assets',
        files: {'<%= app.src %>/': ['pages/**/*.hbs']},
        helpers: ['handlebars-helper-compose'],
        compose: {
          cwd: '<%= app.src %>',
          sep: '<!-- include -->'
        }
      },
      dev: {
        src: ['<%= app.src %>/pages/{,*/}*.hbs'],
        dest: '<%= app.tmp %>/'
      },
      build: {
        src: ['<%= app.src %>/{,*/}*.hbs'],
        dest: '<%= app.dist %>/'
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

    // Copy other files except Bower js files - see bowercopy
    copy: {
      js: {
        files: [{
          expand: true,
          src: ['assets/js/*.js', 'guidebook/js/{,**/}*.js'],
          cwd: '<%= app.src %>',
          dest: '<%= app.tmp %>',
          ext: '.js'
        }]
      },
      fonts: {
        expand: true,
        src: ['assets/fonts/*'],
        cwd: '<%= app.src %>',
        dest: '<%= app.tmp %>'
      },
      swf: {
        files: [{
          expand: true,
          src: ['assets/js/{,**/}*.swf', 'guidebook/js/{,**/}*.swf'],
          cwd: '<%= app.src %>',
          dest: '<%= app.tmp %>',
          ext: '.swf'
        }]
      },
    },

    // Copy Bower
    bowercopy: {
      options: {
        srcPrefix: '<%= app.src %>/assets/libs'
      },
      dev: {
        options: {
          destPrefix: '<%= app.tmp %>/assets/libs'
        },
        files: {
          'modernizr/modernizr.js': 'modernizr/modernizr.js',
          'chosen/chosen.jquery.min.js': 'chosen/chosen.jquery.min.js'
        }
      }
    },

    // Generate CSS from SASS
    // compass: {
    //   dev: {
    //     options: {
    //       sassDir: '<%= app.src %>/assets/css',
    //       cssDir: '<%= app.tmp %>/assets/css',
    //     },
    //   },
    //   sgdev: {
    //     options: {
    //       sassDir: '<%= app.src %>/guidebook/css',
    //       cssDir: '<%= app.tmp %>/guidebook/css',
    //       environment: 'production'
    //     },
    //   },
    //   build: {
    //     options: {
    //       sassDir: '<%= app.src %>/assets/css',
    //       cssDir: '<%= app.dist %>/assets/css',
    //       environment: 'production'
    //     },
    //   },
    //   sgbuild: {
    //     options: {
    //       sassDir: '<%= app.src %>/guidebook/css',
    //       cssDir: '<%= app.dist %>/guidebook/css',
    //       environment: 'production'
    //     },
    //   }
    // },

    sass: {
      dev: {
        options: {
          style: 'expanded',
          lineNumbers: true
        },
        files: [{
          expand: true,
          cwd: '<%= app.src %>/assets/css',
          src: ['*.scss'],
          dest: '<%= app.tmp %>/assets/css',
          ext: '.css'
        }],
      },
      sgdev: {
        options: {
          style: 'expanded',
          lineNumbers: true
        },
        files: [{
          expand: true,
          cwd: '<%= app.src %>/guidebook/css',
          src: ['*.scss'],
          dest: '<%= app.tmp %>/guidebook/css',
          ext: '.css'
        }],
      },
      build: {
        options: {
          style: 'nested'
        },
        files: [{
          expand: true,
          cwd: '<%= app.src %>/assets/css',
          src: ['*.scss'],
          dest: '<%= app.dist %>/assets/css',
          ext: '.css'
        }],
      },
      sgbuild: {
        options: {
          style: 'nested'
        },
        files: [{
          expand: true,
          cwd: '<%= app.src %>/guidebook/css',
          src: ['*.scss'],
          dest: '<%= app.dist %>/guidebook/css',
          ext: '.css'
        }],
      }
    },

    // Minimify our JS
    uglify: {
      build: {
        files: [{
          expand: true,
          src: ['js/{,**/}*.js'],
          cwd: '<%= app.src %>',
          dest: '<%= app.dist %>',
          ext: '.min.js'
        }]
      }
    },

    imagemin: {
      dev: {
        files: [{
          expand: true,
          cwd: '<%= app.src %>/media/images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: '<%= app.tmp %>/sites/default/files/media/images/'
        }]
      },
      build: {
        files: [{
          expand: true,
          cwd: '<%= app.src %>/media/images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: '<%= app.dist %>/sites/default/files/media/images/'
        }]
      }
    },

    csslint: {
      strict: {
        options: {
          import: 2
        },
        src: ['<%= app.tmp %>/assets/css/*.css']
      },
      lax: {
        options: {
          import: false
        },
        src: ['path/to/**/*.css']
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

    // Create a webfont from a batch of svg
    webfont: {
      icons: {
        src: '<%= app.src %>/assets/icons/*.svg',
        dest: '<%= app.src %>/assets/fonts',
        destCss: '<%= app.src %>/assets/css/app/icons',
        options: {
          stylesheet: 'scss',
          styles: 'font',
          syntax: 'bootstrap',
          htmlDemo: true,
          htmlDemoTemplate: '<%= app.src %>/templates/webfont/demo.html',
          destHtml: '<%= app.src %>/pages/icons',
          relativeFontPath: '/assets/fonts'
        }
      }
    },

    // Push to the Github Pages branch
    buildcontrol: {
      options: {
        dir: '<%= app.dist %>',
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      },
      // Release the only assets on their own branch
      assets: {
        options: {
          dir: '<%= app.dist %>/assets',
          remote: 'git@git.dev.iweb.com:ux/shop-styleguide.git',
          branch: 'assets'
        }
      },
      ghpages: {
        options: {
          remote: 'git@git.dev.iweb.com:ux/shop-styleguide.git',
          branch: 'gh-pages'
        }
      }
    },

  });

  // Load plugins from package.json
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('assemble');

  // Styles Tasks
  grunt.registerTask('styles:dev', ['sass:dev', 'sass:sgdev']);
  grunt.registerTask('styles:build', ['compass:build', 'compass:sgbuild']);

  // Scripts Tasks
  grunt.registerTask('scripts:dev', ['copy:js', 'bowercopy:dev', 'copy:swf']);
  grunt.registerTask('scripts:build', ['uglify:build']);

  // Images Tasks
  grunt.registerTask('images:dev', ['newer:imagemin:dev']);
  grunt.registerTask('images:build', ['imagemin:build']);

  // Build Tasks
  grunt.registerTask('build:dev', ['verifylowercase', 'clean:temp', 'newer:assemble:dev', 'images:dev', 'styles:dev', 'scripts:dev', 'copy:fonts']);
  grunt.registerTask('build:build', ['verifylowercase', 'clean:build', 'assemble:build', 'htmlmin:build', 'images:build', 'styles:build', 'scripts:build']);

  // Main Tasks
  grunt.registerTask('default', ['server']);
  grunt.registerTask('server', ['build:dev','connect:dev', 'watch']);
  grunt.registerTask('build', ['build:build']);
  grunt.registerTask('publish', ['build:build', 'bump', 'buildcontrol:ghpages', 'buildcontrol:assets']);

};

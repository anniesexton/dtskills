module.exports = function(grunt) {

   // 1. All configuration goes here 
   grunt.initConfig({
       pkg: grunt.file.readJSON('package.json'),

       compass: {                  // Task
           dist: {                   // Target
             options: {              // Target options
               sassDir: 'scss',
               cssDir: 'css',
               config: 'config.rb',
               environment: 'production'
             }
           }
         },

         watch: {
               sass: {
                 files: ['scss/*.scss'],
                 tasks: ['compass:dist'],
                 options: {
                     spawn: false,
                 }
               },
               css: {
                   files: ['css/*.css']
               },
               livereload: {
                   files: ['css/*.css']
               }
         }

   });

   // 3. Where we tell Grunt we plan to use this plug-in.
   grunt.loadNpmTasks('grunt-contrib-compass');
   grunt.loadNpmTasks('grunt-contrib-watch');

   // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
   

};
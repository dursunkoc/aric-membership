/**
 * Created by TTDKOC on 11/19/2014.
 */
module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint:{
            files:["lib/**/*.js","models/**/*.js","./*.js"]
        },
        watch:{
            files:["lib/**/*.js","models/**/*.js","test/**/*.js","./*.js"],
            tasks:["jshint"]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
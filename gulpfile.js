var gulp = require('gulp'),
    scss = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    hash = require("gulp-hash"),
    del = require("del")

var scssSettings = {
  input: "dynamic/scss/*.+(scss|sass)",
  output: "static/css/scss",
  hash: "data/css",
  options: { outputStyle: "compressed" }
}

gulp.task("scss", function() { 
  del([scssSettings.output + '/**/*'])
  gulp.src(scssSettings.input)
    .pipe(scss(scssSettings.options))
    .pipe(autoprefixer({
      browsers: ["last 20 versions"]
    }))
    .pipe(hash())
    .pipe(gulp.dest(scssSettings.output))
    .pipe(hash.manifest("hash.json"))
    .pipe(gulp.dest(scssSettings.hash))
})


gulp.task("watch", ["scss"], function() {
  gulp.watch(scssSettings.input, ["scss"])
})

//gulp.task("default", ["watch"])
gulp.task("default", ["scss"])

// For more ideas
// http://danbahrami.io/articles/building-a-production-website-with-hugo-and-gulp-js/
// https://github.com/csuarez/hugo-gulp-template
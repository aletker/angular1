// métodos p/ construir todos os javascript do projeto, das funcionalidades, componentes, controllers, rotas
// e tudo o que for pertinentes a aplicação
const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
// indica que a task 'gulp' depende de todas as outras contidas no array
// agrega as demais tasks
gulp.task('app', ['app.html','app.css','app.js','app.assets'])

gulp.task('app.html', function() {
  gulp.src('app/**/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('public'))
})

gulp.task('app.css', function() {
  gulp.src('app/**/*.css')
  .pipe(uglifycss({ "uglyComments": true }))
  .pipe(concat('app.min.css'))
  .pipe(gulp.dest('public/assets/css'))
})

gulp.task('app.js', function() {
  gulp.src('app/**/*.js')
  .pipe(babel({ presets: ['es2015'] }))
  .pipe(uglifycss())
  .pipe(concat('app.min.js'))
  .pipe(gulp.dest('public/assets/js'))
})

gulp.task('app.assets', function() {
  gulp.src('assets/**/*.*')
  .pipe(gulp.dest('public/assets'))
})

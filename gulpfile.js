const gulp = require ('gulp');
const babel = require ('gulp-babel');
const eslint = require ('gulp-eslint');
// Зависимости Gulp будут здесь


exports.default = asyncAwaitTask;


gulp.task('default', function () {
	// Задачи Gulp будут здесь

	// запуск Eslint
	gulp.src(['es6/**/*.js', 'public/es6/**/*.js'])
	.pipe(eslint())
	.pipe(eslint.format());

	// исходный код для Node
	gulp.src('es6/**/*.js')
	.pipe(babel())
	.pipe(gulp.dest('dist'));

	// исходный код для браузера
	gulp.src('public/es6/**/*.js')
	.pipe(babel())
	.pipe(gulp.dest('public/dist'));
});

const fs = require('fs');

async function asyncAwaitTask() {
  const { version } = fs.readFileSync('package.json');
  console.log(version);
  await Promise.resolve('some result');
}
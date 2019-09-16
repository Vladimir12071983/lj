const gulp = require ('gulp');
const babel = require ('gulp-babel');
// Зависимости Gulp будут здесь

gulp.task('default', function () {
	// Задачи Gulp будут здесь

	// исходный код для Node
	gulp.src('es6/**/*.js')
	.pipe(babel())
	.pipe(gulp.dest('dist'));

	// исходный код для браузера
	gulp.src('public/es6/**/*.js')
	.pipe(babel())
	.pipe(gulp.dest('public/dist'));
});


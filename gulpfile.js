var gulp = require('gulp');
var watch = require('gulp-watch');
var sass =require('gulp-sass');

// taks para o sass
 gulp.task('sass', function(){	
	return gulp.src('sass/**/*.sass')
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(gulp.dest('CSS'));
	//return gulp.src('sass*.sass')
    //.pipe(sass('error', sass.logError))
    //.pipe(gulp.dest('CSS'))
});

gulp.task('watch', function(){
	gulp.watch('sass/**/*.sass', ['sass']);
});



/*gulp.task('sass', () =>
    sass('sass/*.sass')
        .on('error', sass.logError)
        .pipe(gulp.dest('css'))
);
*/

// taks default gulp
gulp.task('default', ['sass','watch']);
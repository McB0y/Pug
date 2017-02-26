const gulp = require('gulp');
const pug = require('gulp-pug');

//creando nuestras tareas.
// NOTE: La función pug debe recibir un objeto con las opcciones correspondientes a l salida deseada del file
gulp.task('pug', ()=>{
   gulp.src('./dev/views/*.pug')
       .pipe(pug({
          pretty : true //esta opción nos regresa una version sin minificar
       }))
       .pipe(gulp.dest('./dist/'))
});

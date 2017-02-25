/*Archivo de Gulp en el que se tendran todas las configuraciones para el workflow
y las tareas que se vayan necesitando.*/
const gulp = require('gulp');

//Lo 4 métodos de Gulp son los siguientes:
/*
+gulp.task('nombre', ()=>{
//aqui deberia de ir la lista de tareas como:
gulp.dest('./css');
gulp.src('./scss');
}); -->Las tareas que creamos para automatizar
+gulp.dest('./css'); --> Destinos
+gulp.src('./scss'); --> Rutas fuente
+gulp.watch('directorioDeBusqueda', ['array de tareas']); --> Que archivos queremos que gulp
vigile al momento de salvar cambios, en que archivo, y por cuales tareas debe de pasar.
*/

// NOTE: El siguiente es un ejemplo ilustrativo de como se unen tareas a Gulp mediante plugins

gulp.task('myTask', ()=>{
gulp.src('./origen')
    .pipe(plugin1)
    .pipe(plugin2)
    .pipe(pligin3)
    .pipe(gulp.dest('./destino'))
    /*En este ejemplo lo que se intenta hacer es tener un codigo que se esta
    tomando en una carpeta de src y pasarlo por una serie de plugins: Es decir
    el primero concatena, el segundo minifica, el tercero ofusca por poner un ejemplo
    y en el último pipe se pone el código en la carpeta de destino.*/
});


// NOTE: Observa la próxima tarea que contiene internamente al watch

gulp.task('default', () =>{
   gulp.watch('./origen', ['myTask']);
})


// NOTE: Para poder ejecutar en la consola sólo debermos de escribir:
//       'gulp "nombre de la tarea"', que por defecto este buscara la
//       tarea con nombre default por tanto solo seria necesario escribir:
//       'gulp' en la consola.

const activo = true;

//let mensaje = '';

/* if(activo){
    mensaje = 'Activo';
}else{
    mensaje = 'Inactivo';
} */

//const mensaje = (activo) ? 'Activo' : 'Inactivo';
//no es útil mandar como retorno un NULL
//const mensaje = (!activo) ? 'Activo' : null ;
//utilizamos el operador AND para solo mandar el retorno 
//cuando funcione la condición
const mensaje = (activo) && 'Activo' ; //Activo
//const mensaje = (!activo) && 'Activo' ; //false

console.log(mensaje);
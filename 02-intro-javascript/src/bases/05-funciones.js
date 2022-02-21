//Funciones en JavaScript

const saludar = function (nombre) {
    return `Hola, ${ nombre }`;
}

const saludar2 = (nombre) => {
    return `Hola 2, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola 3, ${nombre}`

console.log(saludar2('Jostin'));
console.log(saludar3('Jostin'));

const getUser = ()=>{
    return {
        uid : 'ABC123',
        username : 'KingLeon123'
    }
}

console.log(getUser());


//TAREA:
//1. transformar a funcion de flecha
//2. retornar obj implicito , se usan parentesis y ya no el return
const getUsuarioActivo = (nombre) => ({
        uid: 'ABC567',
        username: nombre
    }); 


const usuarioActivo = getUsuarioActivo('Jostin');
console.log(usuarioActivo);
console.log(usuarioActivo.username);
//DESESTRUCTURACIÓN DE OBJETOS
const persona = {
    nombre : 'Jostin',
    edad : 20,
    clave : '123456'
};

const { edad, nombre, clave } = persona;

/* console.log(nombre);
console.log(clave); */

const miContext = ({clave, nombre, edad, rango='Capitán'}) => {
    //metodo normal 
    //console.log( usuario.nombre, usuario.edad )

    //tambien es posible obtener directamente las propiedades
    //e incluso agregar algunas q no están en el obj 
    //console.log(nombre,edad,rango)

    //retornar nuevo obj
    return {
        nombreClave : clave,
        anios : edad,
        latlng: {
            lat: 14.1256,
            lng: -15.1616
       }
    }
}

const avenger = miContext( persona );

const {nombreClave , anios, latlng:{ lat,lng }} = avenger; 

// con linea 29 - metodo normal
//console.log(avenger.nombreClave, avenger.anios);
//desestructurando - con linea 31
console.log(nombreClave, anios);
console.log(lat, lng);
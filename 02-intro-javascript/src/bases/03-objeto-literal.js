const persona = {
    nombre : 'Tony',
    apellido: 'Stark',
    edad: 45, 
    direccion: {
        ciudad: 'New York',
        zip: 55561616,
        lat : 14.3222,
        lng: 34.9254545
    }
};

console.log(persona);

const persona2 = {...persona};

persona2.nombre = 'Spiderman';

console.log(persona2)
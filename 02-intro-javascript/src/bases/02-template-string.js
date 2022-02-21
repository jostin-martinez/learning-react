const nombre = 'Jostin';
const apellido = 'Martinez';

const nombreCompleto = `Hola ${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombreCompleto) {
    return 'Hola ' + nombreCompleto;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`)
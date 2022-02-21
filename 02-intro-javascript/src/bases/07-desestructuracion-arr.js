const personajes = ['Goku','Veggeta','Trunks'];
const [,,p3] = personajes;
console.log(p3);

const retornaArreglo = ()=>{
    return ['ABC',123];
}

const [ letras, numeros ] = retornaArreglo();

console.log(letras, numeros);


//tarea
const miState = (valor)=>{
    return [valor, ()=>{console.log('Hola mundo')}];
}

//desestructurando tal funcion que devuelve un array
//no es necesario colocar () cuando le aplico un nombre a la funcion de flecha q devuelve
const [ nombre, setNombre] = miState('Goku');

console.log(nombre);
setNombre(); //arr[1]()
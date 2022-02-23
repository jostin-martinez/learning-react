import { retornaArreglo } from "../base/07-deses-arr";

describe('Pruebas en desestructuración', () => {
    test('Debe retornar un string y un numero ', () => {
        
        //const [ arr ] = retornaArreglo();
        const [ letras, numeros ] = retornaArreglo(); //['ABC', 123]

        expect( letras ).toBe( 'ABC' );
        expect( numeros ).toBe( 123 );
        //expect( arr ).toEqual( ['ABC', 123] );
        expect( typeof letras ).toEqual( 'string' );
        expect( typeof numeros ).toEqual( 'number' );
    });
});
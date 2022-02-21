import '@testing-library/jest-dom';

import { getSaludo } from '../base/02-template-string';    

describe('Pruebas en el 02-template-string.test.js', () => {
    test('Debe de retornar Hola Jostin', () => {
        const nombre = 'Jostin';

        const saludo = getSaludo(nombre);

        expect( saludo ).toBe('Hola '+ nombre);
        
    });

    //getSaludo debe retornar Hola Carlos si no hay dato en el nombre.

    test('Debe retornar Hola Carlos', () => {
        
        const saludo = getSaludo();

        console.log(saludo);

        expect(saludo).toBe('Hola Carlos');

    });

});
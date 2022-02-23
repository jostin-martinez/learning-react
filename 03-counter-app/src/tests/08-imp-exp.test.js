import { getHeroeById } from "../base/08-imp-exp";
import  heroes  from "../datos/heroes";

describe('Pruebas en funciones de heroes', () => {
    test('Debe retornar un heroe por id', () => {
        
        const id = 1;

        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id );
        
        expect( heroe ).toEqual( heroeData );
    });

    test('Debe retornar undefined si hero no existe', () => {
        
        const id = 10;

        const heroe = getHeroeById( id );
        
        expect( heroe ).toBe( undefined );
    });
});
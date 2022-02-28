import { getHeroeByIdAsync } from "../base/09-promesas";
import heroes from '../datos/heroes';


describe('Pruebas con promesas', () => {
    test('GetHeroeByIdAsync debe de retornar un Heroe async', ( done ) => {
    
        const id = 1;

        getHeroeByIdAsync( id )
        .then( heroe => {
            expect( heroe ).toBe( heroes[0] );
            done(); //especificar que se terminó el proceso
        });
    });

    test('Debe obtener error si el heroe por id no existe', ( done ) => {
        
        const id = 10;

        getHeroeByIdAsync( id )
            .catch( error => {
                expect( error ).toBe( 'No se pudo encontrar el héroe' );
                done(); //cuando finaliza la peticion y no se espera mas funciones
            });
    });
});
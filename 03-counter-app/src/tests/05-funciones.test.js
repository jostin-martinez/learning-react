import { getUser, getUsuarioActivo } from "../base/05-funciones";

describe('Pruebas en 05-Funciones', () => {
    test('getUser debe retornar un objeto', () => {
        
        const userTest = {
            uid : 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( user ).toEqual( userTest );
    });

    test('getUsuarioActivo debe retornar un objeto usando parámetros', ( ) => {

        const nombre = 'Jostin';

        const userActivo = getUsuarioActivo( nombre );

        expect( userActivo ).toEqual( 
            {
                uid : 'ABC567',
                username: nombre
            }
        );
    });
});
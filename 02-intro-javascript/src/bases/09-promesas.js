//PROMESAS

import {getHeroeById} from './bases/08-import-export';

/* const promesa = new Promise( (resolve, reject) =>{

    setTimeout( () => {
        const heroe = getHeroeById(2);
        resolve( heroe );
        //reject('No se encontraron datos');
    }, 2000);

});

promesa.then( ( heroe ) => {
    console.log("HEROE THEN: ", heroe);
}).catch( err => console.warn('Error de la promesa') ) */

const getHeroeByIdAsync = ( id ) => {

    return new Promise( ( resolve , reject ) =>{

        setTimeout( () => {
            const heroe = getHeroeById( id );
            if ( heroe ) {
                resolve( heroe );
            } else {
                reject( 'No se encontraron datos' ); //se envia y es el err del catch
            }
        }, 2000);
    
    });

}

getHeroeByIdAsync(1)
    .then( console.log )
    .catch( console.warn );
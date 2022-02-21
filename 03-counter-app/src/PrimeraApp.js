import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ( { saludo, subtitulo } ) => {

    //const saludo = 'Hola mundo'

    //pasa como parámetro en el index <PrimeraApp saludo='Hola Mundo' />
    //es posible colocar dato por defecto si no se pasan parámetros saludo='Hola Mundo'

    return(
        <div>
            <h1>{ saludo }</h1> 
            <p>{ subtitulo }</p>
        </div>
    );
}

//El saludo debe ser del tipo string
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
} 

//propiedades por defecto
//otro método, en lugar de colocarlo en la linea 4 al costado del parámetro
PrimeraApp.defaultProps = {
    subtitulo : 'Soy un subtitulo'
}

export default PrimeraApp;
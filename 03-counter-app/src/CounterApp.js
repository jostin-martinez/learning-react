import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value = 10 }) => {

    //useState toma 2 argumentos, valor y funcion 
    //valor, setValor
    const [ counter, setValor ] = useState( value );

    const aumentarNumero = (e) => {
        //setValor( counter + 1 );
        setValor( (counter) => counter + 1 )
    }

    const disminuirNumero = () => {
        setValor( (counter) => counter - 1 )
    }

    const resetNumero = () => {
        setValor( value )
    }

    return (
        <div>
            <h1>CounterApp</h1>
            <p> { counter } </p>

            <button onClick={aumentarNumero}>+1</button>
            <button onClick={resetNumero}>Reset</button>
            <button onClick={disminuirNumero}>-1</button>
        </div>

    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;
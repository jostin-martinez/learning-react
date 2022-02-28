import React from 'react';

const { render, getByText } = require("@testing-library/react");
const { default: PrimeraApp } = require("../PrimeraApp");


describe('Pruebas en <PrimeraApp />', () => {
   test('Debe de mostrar el mensaje', () => {

    const saludo = 'Hola, soy Goku';

    const { getByText } = render( <PrimeraApp saludo={saludo}/> )

    expect( getByText(saludo) ).toBeInTheDocument();

   });     
});
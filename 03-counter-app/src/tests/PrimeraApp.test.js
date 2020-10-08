import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import React from 'react';
import '@testing-library/jest-dom'


describe('Pruebas en <PrimeraApp>',()=>{
    test('debe retornar el mensaje "Hola, Soy Goku" ',()=>{

        const saludo='Hola, Soy Goku';

        //wrapper: sera el producto nuestro componete renderizado
        //const wrapper = render(<PrimeraApp saludoIndex={saludo} />)   //render es una funcion que recibe un componente que queremos renderizar
        
        //Se desectrocturizo wrapper para poder sacar getByText() que es un metodo para hacer evaluaciones
        const {getByText} = render(<PrimeraApp saludo={saludo} />)   //render es una funcion que recibe un componente que queremos renderizar
        
        expect(getByText(saludo)).toBeInTheDocument //toBeInTheDocument(); deberia funcionar con () pero no es asi
    });


});
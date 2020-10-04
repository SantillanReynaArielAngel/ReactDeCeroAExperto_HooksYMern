import React from 'react'; //Se escribe "imr" y enter para ta que automaticamente importe react 
//Para validar las propiedades de un props se debe importar:
import PropTypes from 'prop-types';

//este es un componente, el cual tendra que regresar algo de html
const PrimeraApp = ( {saludoIndex, subtitulo} ) => { // props contiene el saludoIndex(propiedad) del archivo indexed.js, tambien podemos utilizar desectrocturacion
                                            // tambien se puede establecer un valor por defecto si es que no se mando nada(ninguna propiedad) por props: const PrimeraApp = ({saludoIndex='Algo por defecto'})

    const saludo= 'Hola Mundo';
    const PI=3.1416;
    const array = [1,2,3,4,5];

    const objeto = {
        nombre: 'Santillan',
        edad:23,
    }
    return (

        <>
            {/*props sin desestrocturacion */}
            {/* <h1>{props.saludoIndex}</h1>  */}

            {/* prosp con desestrocturacion */}
            <h1>{saludoIndex}</h1>

            <p1>{subtitulo}</p1>
        </>
        );

        
}

//VALIDANDO Las propiedades de un  props
PrimeraApp.propTypes = {
    //saludo: PropTypes.string,    // indica que saludo es un props de tipo string; PERO EL MIMSO ES OPCIONAL
    saludo: PropTypes.string.isRequired,    // indica que saludo es un props de tipo string y ES OBLIGATORIO
    // se puede validar cuantos propiedades de un props y tipos (strings,number,bool,arryas,etc)
}


//OTRA FORMA DE ESTABLECER VALOR POR DEFECTO A LAS propiedades de un props:
PrimeraApp.defaultProps={
    subtitulo: 'Subtitulo por defecto',
}

export default PrimeraApp;
import React from 'react'; //Se escribe "imr" y enter para ta que automaticamente importe react 
//Para validar las propiedades de un props se debe importar:
import PropTypes from 'prop-types';

//este es un componente, el cual tendra que regresar algo de html
const PrimeraApp = ( {saludo, subtitulo} ) => { // props contiene el saludoIndex(propiedad) del archivo indexed.js, tambien podemos utilizar desectrocturacion
                                            // tambien se puede establecer un valor por defecto si es que no se mando nada(ninguna propiedad) por props: const PrimeraApp = ({saludoIndex='Algo por defecto'})
    return (
        <>
            {/* prosp con desestrocturacion */}
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
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
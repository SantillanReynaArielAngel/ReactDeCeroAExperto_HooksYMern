import React from 'react';
import PropType from 'prop-types'


const CounterApp = ({value}) => {

    //4ta forma con 1 1 parametro y una funcion propia:
    const handleAdd = (p1)=>{
         console.log(p1);

        // IMPORTANTE1
        // return ()=>console.log("Este es el handleAdd()");
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2>{value}</h2>
            
            {/* Se creara un evento de boton, IMPORTANTE colocar las acciones dentro de {}*/}
            
            {/* 1ra forma: */}
            {/* <button onClick={function(){console.log(1)}} >+1</button> */}

            {/* 2da forma: */}
            {/* <button onClick={() => {console.log(1)}} >+1</button> */}

            {/* 3ra forma con 1 parametro: NOTA: P1 ES EL EVENTO TIPO REACT QUE PASA POR DEFAUL onClick*/}
            {/* <button onClick={(p1) => {console.log(p1)}} >+1</button> */}
        
            {/* 4ta forma con 1 parametro y una funcion propia : NOTA: P1 ES EL EVENTO TIPO REACT QUE PASA POR DEFAUL onClick*/}
            {/* <button onClick={(p1) => { handleAdd(p1) }} >+1</button> */}

            {/* 4ta forma Simplificada ya que solo se pasa un argumento (como en las promesas) */}
            {/* IMPORTANTE1: MUCHO CUIDADO DE SOLO COLOCAR: handleAdd(), esto busca la funcion a ejecutar y espera un RETURN que devuelva una funcion. REVISAR LA FUNCION EN CUESTION EL COMENTARIO  "IMPORTANTE1"  */}
            {/* CABE RECLACAR QUE SE PUEDE ENVIAR ARGUMENTOS: onClick={ (p1)=>handleAdd(p1) } */}
            <button onClick={ handleAdd } >+1</button>
        </>
    );
}

CounterApp.propType={
    value: PropType.number.isRequired,
}

export default CounterApp;

// IMPORTANTE :ATAJOS DE DECLADOS:


// A) DECLEAR 'rafc' Y ENTER (Para importar React y crear el FuncionalComponnent ):

// import React from 'react'

// export const CounterApp = () => {
//     return (
//         <div>
            
//         </div>
//     )
// }


// B) DECLEAR 'rafce' Y ENTER (Para importar React, crear el FuncionalComponnent y Exportar el mismo )
// import React from 'react'

// const CounterApp = () => {
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default CounterApp


// B) DECLEAR 'rafcp' Y ENTER (Para importar React, crear el FuncionalComponnent con Props, crear PropTypes para validar propiedades y Exportar el componente )
// import React from 'react'
// import PropTypes from 'prop-types'

// const CounterApp = props => {
//     return (
//         <div>
            
//         </div>
//     )
// }

// CounterApp.propTypes = {

// }

// export default CounterApp

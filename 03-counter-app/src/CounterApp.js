// USANDO hooks: useState

import React, {useState} from 'react';
import PropType from 'prop-types'


const CounterApp = ({value}) => {

    //hook useState
    const [counter, setCounter] = useState(value); //Este hook regresa un array, el 1er argumento es nuestra variable y el 2do es una funcion para modificar el 1er argumento.

    //4ta forma con 1 parametro y una funcion propia (PARA UTILIZAR EL hook):
    const handleAdd = ()=>{
        setCounter(counter+1); //DE ESTA FORMA SE UTILIZA LA FUNCION DEL hook
    }

    //Para la tarea:
    const handleSubtract=()=>{
        setCounter(counter-1);
    }

    const handleReset=()=>{
        setCounter(value);
    }


    return(
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            {/* handle = encargarse de */}
            {/* 4ta forma Simplificada ya que solo se pasa un argumento (como en las promesas) */}
            {/* IMPORTANTE1: MUCHO CUIDADO DE SOLO COLOCAR: handleAdd(), esto busca la funcion a ejecutar y espera un RETURN que devuelva una funcion. REVISAR LA FUNCION EN CUESTION EL COMENTARIO  "IMPORTANTE1"  */}
            {/* CABE RECLACAR QUE SE PUEDE ENVIAR ARGUMENTOS: onClick={ (p1)=>handleAdd(p1) } */}
            <button onClick={ handleAdd } >+1</button>

            {/* Para la tarea */}
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubtract}>-1</button>
        </>
    );
}

CounterApp.propType={
    value: PropType.number.isRequired,
}

export default CounterApp;


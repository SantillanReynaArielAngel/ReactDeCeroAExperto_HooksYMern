import React from 'react'; //Se escribe "imr" y enter para ta que automaticamente importe react 

//import React, { Fragment } from 'react';
// EL NOMBRE DE LOS ARCHIVOS QUE SEAN COMPONENETES SE ESCRIBEN CON LA primera letra en mayuscula. Ejemplo: PrimeraApp.js
// EXISTEN 2 FORMAS DE ESCRIBIR compoentes EN REACT:
// 1 En base a clases
// 2 con funciones (FuncionComponents)

//este es un componente, el cual tendra que regresar algo de html
const PrimeraApp = () => {

    const saludo= 'Hola Mundo';
    const PI=3.1416;
    const array = [1,2,3,4,5];

    const objeto = {
        nombre: 'Santillan',
        edad:23,
    }
    return (
        // IMPORTANTE: SI SE QUIERE DEVOLVER MAS DE UN ELEMENTO COLOCAR LOS MISMOS DENTRO DE UN DIV( ASI SE DEVUELVE UNSOLO ELEMTO QUE CONTEGA VARIOS DENTRO DE SI) Y EL TODO EL RETURN DEBE ESTAR ENTE ()
        // <div> 
        //     <h1>Hola Mundo</h1>
        //     <p>parrafo</p>
        // </div>
        
        //TAMBIEN SE PUEDE UTILIZAR UN Fragment, para evitar crear div inecesarios(recalcal que al div se le puedo colocar clases y cosas que puedan servirnos)
        //para usar Fragment, se debera importar el mismo
        // <Fragment>  
        //     <h1>Hola Mundo</h1>
        //     <p>parrafo</p>
        // </Fragment>
        
        //OTRA FORMA DE CREAR UN Fragment sin importar colocando etiquetas vacias
        // <>  
        //     <h1>Hola Mundo</h1>
        //     <p>parrafo</p>
        // </>
        
        
        //Dentro de las {} se puede escribir js (primordialmente primitivo), no se imprimen booleanos
        // <>
        //     {/* <h1>{array}</h1> solo imprime una sola cosa a la vez dentro de los {}*/}
            
        //     {/* para imprimer objetos podemos utilizar: JSON.stringinfy(1roParam-es lo que se quiere mostrar, 2doParam- es lo replacer, 3roParam- es el espacio). Opcinalmente para darle un mejor formato a la impresion se utiliza la etiqueta <pre> en lugar de <h1> */}
        //     <pre>{JSON.stringify(objeto, null, 3)}</pre>
        //     <p>Mi Primera Aplicacion</p>
        // </>

        <>
            <h1>{saludo}</h1>
            <p1>Mi primera Aplicacion</p1>
        </>
        );

        
}

export default PrimeraApp;
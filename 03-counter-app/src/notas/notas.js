// ARCHIVO: index.js
// CODIGO:
// import React from 'react'; //Para oder utilizar JSX(javascript y etiquetas html) en este archivo se necesita importar React
// import ReactDOM from 'react-dom'; //Nos sirve para colocar(rendirizar) contenido en nuestro html 

// const saludo = <h1>Hola mundo</h1>;//es una variable que crea una etiueta html

// //crear la referencia al div cin ide=app
// const divRoot=document.querySelector('#app');

// //console.log(divRoot); //se imprime la variable que contiene una etiqueta  html

// //rendirizar "saludo(etiqueta) dentro de divRoot"
// ReactDOM.render(saludo, divRoot); // .render(parametro1, parametro2) nos sirve para renderizar(mostrar). El parametro1 es lo que se quire renderizar y el parametro2 es donde queremos renderizarlo.


// ARCHIVO: PrimeraApp.js
// CODIGO:
// import React from 'react'; //Se escribe "imr" y enter para ta que automaticamente importe react 

// //import React, { Fragment } from 'react';
// // EL NOMBRE DE LOS ARCHIVOS QUE SEAN COMPONENETES SE ESCRIBEN CON LA primera letra en mayuscula. Ejemplo: PrimeraApp.js
// // EXISTEN 2 FORMAS DE ESCRIBIR compoentes EN REACT:
// // 1 En base a clases
// // 2 con funciones (FuncionComponents)

// //este es un componente, el cual tendra que regresar algo de html
// const PrimeraApp = () => {
//     return (
//         // IMPORTANTE: SI SE QUIERE DEVOLVER MAS DE UN ELEMENTO COLOCAR LOS MISMOS DENTRO DE UN DIV( ASI SE DEVUELVE UNSOLO ELEMTO QUE CONTEGA VARIOS DENTRO DE SI) Y EL TODO EL RETURN DEBE ESTAR ENTE ()
//         // <div> 
//         //     <h1>Hola Mundo</h1>
//         //     <p>parrafo</p>
//         // </div>
        
//         //TAMBIEN SE PUEDE UTILIZAR UN Fragment, para evitar crear div inecesarios(recalcal que al div se le puedo colocar clases y cosas que puedan servirnos)
//         //para usar Fragment, se debera importar el mismo
//         // <Fragment>  
//         //     <h1>Hola Mundo</h1>
//         //     <p>parrafo</p>
//         // </Fragment>
        
//         //OTRA FORMA DE CREAR UN Fragment sin importar colocando etiquetas vacias
//         <>  
//             <h1>Hola Mundo</h1>
//             <p>parrafo</p>
//         </>
        
//         );

        
// }

// export default PrimeraApp;
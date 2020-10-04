import React from 'react'; //Para oder utilizar JSX(javascript y etiquetas html) en este archivo se necesita importar React
import ReactDOM from 'react-dom'; //Nos sirve para colocar(rendirizar) contenido en nuestro html 
import PrimeraApp from './PrimeraApp-b2'; //se exporta la etiqueta h1
import './index.css'; // se importan los estilos



//crear la referencia al div cin id=app
const divRoot=document.querySelector('#app');

//console.log(divRoot); //se imprime la variable que contiene una etiqueta  html

//rendirizar "saludo(etiqueta) dentro de divRoot"
//<PrimeraApp> es el componente padre
// SI SE QUIERE PASAR UNA PROPIEDAD POR PROPS DE TIPO NUMBER se escribe entre {} por que es un jsx : <PrimeraApp saludoIndex={123} />
ReactDOM.render(<PrimeraApp saludoIndex='Hola Desde Index' /> , divRoot); // .render(parametro1, parametro2) nos sirve para renderizar(mostrar). El parametro1 es lo que se quire renderizar y el parametro2 es donde queremos renderizarlo.


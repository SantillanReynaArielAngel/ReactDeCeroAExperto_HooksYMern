//Objetos Literales o diccionarios, estos trabajan con pares de valores
//NO COLOCAR CARACTERES ESPECIALES
const persona={
  nombre:'Tony',
  apellido:'Start',
  edad: 45,
  direccion: {
      ciudad: 'New York',
      zip: 555212121,
      lat:14.3232,
      lng:34.929656
  } 
};
//Para sacar todo lo que contiene el diccionario
//console.log(persona);


// para sacar solo el nombre
//console.log(persona.nombre);


//Se crea un objeto de esta manera: {persona:persona}
//console.log({persona:persona}) o console.log({persona});o console.log(persona);


//Otra foorma de imprimir los diccionarios  para ver de manera mas comoda es:
//console.table(persona);


//NUNCA HACER ESTO PARA TRATARDE COPIAR UN OBJETO:
/*const persona2=persona; //ya que solo se hace referencia en posision de memoria de persona
persona2.nombre='Pedro';
console.log(persona);
console.log(persona2);
*/

//ESTA ES LA FORMA DE REALIZAR LA COPIA(clonar) DE UN OBJETO y si se quiere  se hace la modificacion de datos
// Se utilizara operador exprect ...objetoAClonar
const persona2={...persona};
persona2.nombre='Pedro';

console.log(persona);
console.log(persona2);


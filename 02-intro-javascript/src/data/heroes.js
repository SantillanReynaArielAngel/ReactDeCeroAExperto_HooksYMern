//export nos sirve para exportar(en este caso un array), y tenerlo listo para que OTRO ARCHIVO lo utilice usando  'import'
export const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

//EXPORTACION POR DEFECTO:
/* export default [
    ...
]
y en la importacion no sera necesario las {}

//OTRA FORMA (AL FINAL DEL ARCHIVO): 
export default heroes
*/

//EXPORTACION MULTIPLE(exportacion por default y otra INDIVIDUAL)
/**
 * export default heroes
 * export const owners = ['DC','Marvel'];
 */

 //EXPORTACION MULTIPLE(USANDO UN OBJETO)
 /**
  * export{
  *     heroes,
  *     owners
  * }
  */

  //EXPORTACION MULTIPLE(USANDO UN OBJETO y una exportacion por default)
 /**
  * export{
  *     heroes as default,
  *     owners
  * }
  */
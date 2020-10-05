//IMPORT, EXPORT Y FUNCIONES
//IMPORTANTE COLOCAR EL ./ PARA INDICAR DE DIRECTORIOS DE NUESTRA POSISION ACTUAL
// dentro de las {}, se coloca los que se necesita importar del archivo al que se hace refenrencia; PERO PREVIAMENTE SE DEBERA HABER EXPORTADO (export) lo que se quiere EN EL ARCHIVO al que se hace referencia
//Es opcional colocar .js y ; para al realizar la importacion de un ARCHIVO JS

import {heroes} from '../data/heroes'; //CUANDO NO TIENNE LLAVES ES LA EXPORTACION POR DEFECTO

//IMPORT por default: import heroes from '../data/heroes'; el nombre de la importacion puede se culaquiercosa, en este caso es "heroes"

//IMPORTACION MULTIPLE(exportacion por default y otra INDIVIDUAL): import heroes, {owners} from '../data/heroes';

//EXPORTACION MULTIPLE(USANDO UN OBJETO): import {heroes, owners} from '../data/heroes';

//EXPORTACION MULTIPLE(USANDO UN OBJETO y una exportacion por default): import heroes, {owners} from '../data/heroes';


/*
//console.log(heroes); DEVOLVERA EL ARRAY HEROES DEL ARCHIVO heroes.js
const getHeroeById = (id) => {
    //find() recibe una funcion con argumento y itera cada elemento del array (en este caso heroes)
    //IMPORTANTE; find() solo retorna un solo valor, se puede utilizar con id por  el mismo simpre seria unico. Para otros casos es mejor recurrir a filter
    return heroes.find((heroe) =>heroe.id===id); //heroe es el PARAMETRO que recibe la funcion (todo el objeto en este caso), y contiene el valor(es) del elemento(dicionario u objeto en este caso) que saca find() del array heroes en cada iteracion
   

}
console.log(getHeroeById(2));
*/

//SIMPLIFICANDO LA FUNCION ANTERIROR(POR QUE RETURN SOLO RETOORNA UNA SOLA INSTRUCCION):
const getHeroeById = (id) => heroes.find((heroe)=>heroe.id===id);
//console.log(getHeroeById(2));

//funcion para loes heroes con cierto Owner
/* find() solo sacaria el primer resultado que encontraria, se debe utilizar filter 
const getHeroeByOwner = (owner) => heroes.find((heroe)=>heroe.owner===owner);
console.log(getHeroeByOwner('DC'));
*/
const getHeroeByOwner = (owner) => heroes.filter( (heroe) => heroe.owner===owner);
//console.log(getHeroeByOwner('Marvel'));



//EXPORTACIONES PARA LAS PROMESAS
export {
    getHeroeById,
    getHeroeByOwner,
}
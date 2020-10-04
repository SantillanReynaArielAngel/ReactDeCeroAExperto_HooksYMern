
//Variables y constantes:
//Var ya no se debe  utilizar.

const nombre='Ariel'; //son datos que no se cambiaran en el programa, es decir no se renombraran
//let // esta variable se utiliza si cambiara su valor, para cambiar el valor no es necesario volver a declarar el tipo let
const apellido='Santillan';

let valorDado=5;

console.log(nombre, apellido, valorDado);

//Variables de escout (de un ambito en particilar)
if(true){
    const nombre='Pedro';
    let valorDado=6;// solo existe dentro de este ambito o escout(if)
    console.log(valorDado, nombre);//saldra 6
}


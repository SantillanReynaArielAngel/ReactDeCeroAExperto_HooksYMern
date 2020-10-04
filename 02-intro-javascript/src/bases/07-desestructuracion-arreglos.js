//Desectrocturacion de arrays

//NOTA: PARA CAMBIAR EL NOMBRE DE UNA CONSTANTE O VARIABLE EN TODO EL ARCHIVO, SE HACE CLICK EN LA MISMA, PRESIONAR F2, INGRESAREMOS EL NUVO NOMBRE Y ENTER  

//se crea un array con diferentes elementos
const personajes = ['Goku', 'Vegeta', 'Trunks'];

//de esta forma se desectroctura un array (como los diccionarios)
const [ P1 ] = personajes; //si no se separa con una cosntante entre los [] por defecto se sacara el valor del indice 0 del array
console.log(P1);
//IMPORTANTE: para sacar un elemento se de colocar "," cuantas se necesiten para llegar al elemnto deseado
const [, , p3] = personajes;
console.log(p3);


//Desectrocturacion utilizando funciones:

const retornarArreglo = () => {
    return ['ABC', 123]; //LA FUNCION(sin parametros de entrada) RETORNARA UN ARRAY
}

//Se desosctructurara lo que devuelva la funcion
const [ letras, numeros]=retornarArreglo();
console.log(letras,numeros);

//TAREA
//1. El primer valor del arr se llamara nombre
//2. el segundo valor del arr se llamra set noombre

const userState = (valor) =>{
    // LA primera posision devuelve el valor que ingreso por parametro de entrada.
    //La 2do posision retorna una FUNCION 
    return [valor, ()=>{console.log('Hola Mundo')}];   
}
//sin desectrocturar:
//const arr = userState();
//console.log(arr);// la segunda posisin sera una funcion

//Desectructurando.
//la segunda posision es un funcion que tomara el nombre que se le indica en los [], dicha funcion puede ser plenamente utilizada.
const [nombre,setNombre] = userState('SANTILLAN');
console.log(nombre);
setNombre();
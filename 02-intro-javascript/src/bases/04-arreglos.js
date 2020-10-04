//ARREGLOS js (tambien son objetos en cierta manera)
//Inician de la  posision cero '0'
// el tamanio "length" es el numero de posiones -1
// NO SE RECOMIENDA CREAR UN ARREGLO DE LA SIGUIENTE FORMA:
//const arreglo = new Array();
//asignando el numero de posisiones: const arreglo = new Array(100); pero de igual forma se puede  aumentar mas posisiones: arreglo.push(1)


//Esta es la mmenera recomendadda de crear arreglos:
//const arreglo=[];
const arreglo=[1,2,3,4]; //con valores por defecto

// Tambien no se recomienda insertar con push los valores a un arreglo cuando se es un clon de otro arreglo, Ejemplo:
/*let arreglo2=arreglo
arreglo2.push(5);
console.log(arreglo);
console.log(arreglo2);*/

//esta es mejor forma de clonar arreglo uy podemos anadir a la misma mas elemntos
let arreglo2=[...arreglo,5];
console.log(arreglo);
console.log(arreglo2)

//otra forma de crear un arreglo es utilizando la funcion map(), pero este necsita como parametro una funcion callback)(una funcion que se ejecuta dentro del metodo map() poor  cada elemento del array)
const arreglo3=arreglo2.map(function(numero){
    //return 'hola'// si no se retorna algo , nos retornara indefinido
    return numero*2; //map() cada elemto del arreglo y con la funcion recuperamos el valor del indice en cada corrida y se retorna el multiplicado por 2 (numero*2)
});

console.log(arreglo3);




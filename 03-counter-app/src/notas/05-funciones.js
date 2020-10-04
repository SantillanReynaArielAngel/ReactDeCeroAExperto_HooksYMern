
//FUNCIONES EN JS

//FORMA NO RECOMENDADA
/*function saludar(nombre){
    return `Hola ${nombre}`;
}
saludar =30 // esto haria que se creo una referencia al llamar a saludar
console.log(saludar('Juan'));
*/

//forma recomendada, se utiliza como constante
/*const saludar = function(nombre){
    return `Hola , ${nombre}`;
}
//saludar =30; aqui saldra error por que se quisiera asignar nuevo valor a una cosntante
console.log(saludar)
*/


//FUNCIONES EN FLECHA:
//Nota: las llaves "{}" indican el cuerpo de una funcion

//Con parametro de entrada
const saludar2 = (nombre) => {
    return `Hola , ${nombre}`;
}
console.log(saludar2('Vegeta'));

//Con parametro de entrada y SI EL CUERPO DE LA FUNCION SOLO CONSISTE EN UN RETURN ENTONCES SE SIMPLIFICA:
const saludar3 = (nombre) =>  `Hola , ${nombre}`;
console.log(saludar3('Goku'));

//Sin parametros de entrada y SI EL CUERPO DE LA FUNCION SOLO CONSISTE EN UN RETURN ENTONCES SE SIMPLIFICA:
const saludar4 = () =>  `Hola Mundo`; // aqui no es necesario colar el estring entre (), POR QUE ES UN VALOR PRIMITIVO, SE UTILIZA MAS LOS () CUANDO SE RETORNA OBJETOS
console.log(saludar4());


//Cuando se quiere retornar un objeto, se utiliza () por quer sino js no sabria(se confundiria con las {} del cuerpo con las {} del objeto) si es el cuerpo de la funcion o es un objeto:
// El cuerpo de la funcion es un return que devuelve un objeto
const getUser = () => (
    {
        uid:'ABC123',
        username:'El_papi1234',
    }
);
const user=getUser();//opcionalmente se puede asignar a otra constatnte
console.log(user);


//TAREA
//1. Transformar a una funcion de flecha
//2. Tiene que retornar un objeo implicito(LO QUE SE COLOCA ENTRE PARENTESIS)
//3. Pruebas (cualquier otro nombre)

function getUsuarioActivo(nombre){
    return {
        uid:'ABC567',
        username:nombre,
    }
}
const usuarioActivo=getUsuarioActivo('Ariel');
console.log(usuarioActivo);

//R1
const getUsuarioActivo2=(nombre)=>({//R2
    uid:'ABC567',
    username:nombre,
});
const usuarioActivo2=getUsuarioActivo2('Juan');//R3
console.log(usuarioActivo2);
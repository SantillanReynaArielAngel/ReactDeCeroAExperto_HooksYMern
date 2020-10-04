

//OPERADOR CONDICIONAL TERNARIO

//1ro se tiene el siguiente codigo como ejemplo de la estroctura if-else:
// const activo=true;
// let mensaje = '';
// if(!activo){
//     mensaje='Activo';
// }else{
//     mensaje='Inactivo';
// }

// console.log(mensaje);

//2do sentransforma el anterior codido en un condicional ternario
// const activo=true;
// const mensaje = (activo) ? 'Activo' : 'Inactivo'; //Se tiene la condicion dentro de los "()" y por VERDADERO se ejecuta lo que esta DESPUES DE "?", por FALSO se ejecuta lo que esta DESPUES DE ":"
// console.log(mensaje);

//TAMBIEN EXISTEN OCACIONES DONDE SOLO SE JECUTARA CODIGO CUANDO SE CUMPLA LA CONDICION Y POR ELSE NO HABRA NADA, para eso el OPERADOR CONDICIONAL TERNARIO TIENE LA SIGUIENTE SINTAXIS:
const activo=true;
//const mensaje = activo && 'Activo';  //Si lo que esta ANTES DE LOS "&&" es VERDADERO, se ejecuta lo que continua. En caso que sea FALSO se recive automaticamente un "false"

//Tambien se puede denotar para este y otros casos que no sean booleanos(numeros o strings) de la siguiente forma:
const mensaje = (activo===true) && 'Activo'

console.log(mensaje);



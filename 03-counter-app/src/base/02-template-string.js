
//templetes string

const nombre='Ariel';
const apellido='Santillan';

// las comillas ``, con ellas podemos hacer salos de linea, colocar expresiones de javascript, resultado de funciones,etc
/*const nombreCompleto=`${nombre} 
${apellido}
${1+1}`*/
const nombreCompleto=`${nombre} ${apellido}`

//Se comento pra hacer su test
//console.log(nombreCompleto);

//utilizando funciones con las ``
function getSaludo(nombre ='Carlos')//asignacion por default si no se envio nada Carlos
{
    //return "Hola "+nombre;
    return `Hola ${nombre}`;

}

//Se comento para hacer su test
//console.log(`Este es un saludo: ${getSaludo(nombre)}`);

//Para los test
export{

    getSaludo,
}
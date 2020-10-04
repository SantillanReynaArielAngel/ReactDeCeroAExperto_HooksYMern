
//templetes string

const nombre='Ariel';
const apellido='Santillan';

// las comillas ``, con ellas podemos hacer salos de linea, colocar expresiones de javascript, resultado de funciones,etc
/*const nombreCompleto=`${nombre} 
${apellido}
${1+1}`*/
const nombreCompleto=`${nombre} ${apellido}`

console.log(nombreCompleto);

//utilizando funciones con las ``
function getSaludo(nombre)
{
    //return "hola "+nombre;
    return `hola ${nombre}`;

}

console.log(`Este es un saludo: ${getSaludo(nombre)}`);
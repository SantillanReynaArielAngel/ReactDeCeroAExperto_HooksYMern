//DESESTRUCTURACION O ASIGNACION DESTRUCTURANTE.

//1ro DECLAREMOS UN OBJETO PERSONA
const persona = {
    nombre:'Tony',
    edad:45,
    clave:'Iroman',
    rango: 'Soldado',
}
///////////////////////
/**de esta menera nos evitamos de escribir:
 * console.log(persona.nombre);
 * console.log(persona.edad);
 * console.log(persona.clave);
 */
//////////////////////

//2do se realizara la extraccion de los datos:

//extraee todos los datos indicados(en los {}) del objeto persona
//const {nombre} = persona;
//console.log(nombre);

//tambien se  puede renombrar los campos de los valores, para evitar confusiones:
const {nombre:nombre2} =persona;//{nombreCampo:campoRenombrado}, nota: no se podra acceder a nombre por que ya se renombro a nombre2
console.log(nombre2)

//TAMBIEN SE  PUEDE EXTRAER VARIOS CAMPOS ALA VEZ:
/*const {nombre, edad, clave} = persona;// no es necesario extraer en el mismo orden los campos ejemplo: { edad, clave , nombre,} como tambien pueden terminar en ,
console.log(nombre);
console.log(edad);
console.log(clave);
*/

//DESESTRUCTURANDO UN OBJETO USANDO FUNCIONES:

// forma no recomendada
/*const retornarPersona = (usuario) => { //usuario seria el objeto (persona) que se envia 
    const {edad, clave, nombre} = usuario;// a usuario(que seria el objeto persona), se le extrate los campos edad,clave, nombre 
    console.log(edad,clave,nombre);
}
retornarPersona(persona); // enviamos el objeto persona que se declaro a unicios
*/

//FORMA MAS COOMODA PARA DESESTRUCTURAR CON FUNCIONES
const retornarPersona = ({nombre,edad,clave}) => {//los parametros de entrada sera los campos que nos interesen
    console.log(edad,clave,nombre);
}
retornarPersona(persona); // enviamos el objeto persona que se declaro a unicios

//tambien se puede asignar valores por defecto a campos que querramos añadir (rando)
/*Casos:
1 SI EL CAMPO EXISTE EN EL OBJETO, TOMARA  EL VALOR QUE TIENE
2 SI EL CAMPO NO EXISTE EN EL OBJETO, TOMARA EL VALOR POR DEFECTo QUE SE LE ASIGNE
1*/
const retornarPersona2 = ({nombre,edad,clave, rango ='Capitan' }) => { //los parametros de entrada sera los campos que nos interesen
    console.log(edad,clave,nombre,rango);// Aqui se aplica el caso 1
}
retornarPersona2(persona); // enviamos el objeto persona que se declaro a unicios



//OTRO EJEMPLO: DESESTRUCTURACION DE UNA FUNCION QUE DEVUELVE UN OBJETO
const useContext =  ({clave,edad}) => {// se extrae clave y edad del objeto persona que  llego desde la funcion
    return {
        nombreClave:clave, //se renombran los campos 
        anios: edad,
        //OBJETO ANIDADO: tambien existe el caso que un objeto devuelto contenga otro objeto:
        latlng:{
            lat: 14.4562,
            lng:-12.1456
        }
    }
}
/*
//extrayendo el objeto completo de latlng:
const {nombreClave, anios, latlng} = useContext(persona);//useContext contiene en un objeto nombreClave y anios.    
console.log(nombreClave,anios);
//imprimimos aparte latitud y longuitud por motivos para diferenciar
console.log(latlng);
*/

//Tambien podemos extraer directamente los campos de  forma independiente de latlng:
const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);//useContext contiene en un objeto nombreClave y anios.    
console.log(nombreClave,anios);
console.log(lat,lng);
import {getHeroeById} from './bases/08-import-export'//es posible que tengamos que arreglar la rura por que nuestro archivo ya no es el index

//PROMESAS
// son asincronas
//Promise funciona con una funcion de dollback que recive 2 parmetros: resolve, reject
// resolve: se utiliza para cuando la promesa es exitoza
//reject:se utiliza para cuando la promesa falla
const promesa = new Promise( (resolve, reject) => {
    setTimeout(()=>{// ejecuta un tare en un cierto tiempo
        const heroe = getHeroeById(2); //se utiliza para importar un heroe del archivo 08-import... y este a sus ves importa de heroes.js.
        resolve(heroe);//resolve() llama al then de la promesa, tambien este metodo puede enviar prametros
        reject('NO SE PUEDO ENCONTRAR EL HEROE');
;    }, 3000)// los mm que se tarda para ejecutar el collback de setTimeoute
});

//SE UTILIZAN 3 METOODS: then, cuando la promesa se ejecuto de manera exitosa. catch, la promesa dio un error y finally que se ejecuta al final de todo
promesa.then((recibirHeroe)=>{//El then puede recibir o no paramtros, segun  como se utilizo el resolve()
    console.log('El heroe(s) selecionado(s) es: ', recibirHeroe);
}).catch(recibirErrorReject=>console.warn(recibirErrorReject));// catch() recibe por paramtro el error (lo quen envio el reject(enviarError)). En este caso solo se procede a mostrar el error mediante un mensaje 'warn'



// CREANDO UNA PROMESA QUE POR ARGUMENTO SE LE INDICA QUE HEROE DEBE BUSCAR
const getHeroeByIdAsync = (id)=> {
    //Se procedera a retornar el resultado de la promesa
    return new Promise( (resolve, reject) => {
        setTimeout(()=>{// ejecuta un tare en un cierto tiempo
            const heroe = getHeroeById(id); //se utiliza para importar un heroe del archivo 08-import... y este a sus ves importa de heroes.js.
            if(heroe){ //if(heroe) comprobara si el hero existe(si no es indefinido). No es lo mismo que colocar if(heore==='')
                resolve(heroe);//resolve() llama al then de la promesa, tambien este metodo puede enviar prametros
            }else{
            reject('NO SE PUEDO ENCONTRAR EL HEROE (funcion getHeroeByIdAsync)');
            }
    ;    }, 4000)// los mm que se tarda para ejecutar el collback de setTimeoute
    });
}

// getHeroeByIdAsync al retornar una promesa se puede utilizar los metodos then(), catch() y finally()
getHeroeByIdAsync(7)
    //.then(recibirHeroe => console.log('El heroe es: ', recibirHeroe))
    //.catch(errorReject => console.warn(errorReject))


    //SE PUEDE SIMPLIFICAR EL then si es que solo se recibe un parametro(de resolve(parametro)) y ese parametro se pasa a otra funcion (en este caso console.log)
    .then(console.log)  //then recive por default el primer argumento que le envia el resolve() y esto se referencia a console.log
    //SE PUEDE SIMPLIFICAR EL catch si es que solo se recibe un error por parametro y ese error se pasa a otra funcion (en este caso console.warn)
    .catch(console.warn);// cacth recive por default el primer argumento que le envia el reject() y esto se referencia a console.warn 

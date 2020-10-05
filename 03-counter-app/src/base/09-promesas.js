import {getHeroeById} from './08-import-export'
//PROMESAS

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
        }, 1500)// los mm que se tarda para ejecutar el collback de setTimeoute
    });

}

export{
    getHeroeByIdAsync,
}

//async: Lo que hace es que una funcion normal, el resultado de la misma lo convierte en una promesa
// await: hace que primero se termine de ejecutar la promesa antes de que se prosiga el ejecucion del resto del codigo

//Se tiene la siguiente promesa simplificada:
//const getImagePromesa = () =>  new Promise( (resolve) => resolve('https://Hola-mundo') );
//getImagePromesa().then(console.log);


//Se utilizara el async
const getImage = async() => {

    //POR BUENAS PRACTICAS SE UTILIZARA EL try-catch
    try{// Se ejecuta el contenido y si por algun problema da error, se salta al catch enviandole el error
        const apiKey= '8wlANRRetfjW9wAJqzwMFrc97eRVNTxk'; // Fectch API
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await respuesta.json(); // Primeramente se busca el contenido del boody(Es un dicionario anidado) de la respues de la API, de ese diccionario anidado SACAMOS(con desestructuracion) el campo data(que la la vez es otro diccionario).
        const {url} = data.images.original;//Del diccionario anidado "data" apuntamos al campo "original"(que es un diccionario) y de "original" saca el valor del campo url con la desestructracion
        
        return url;
    }catch(error){//catch recive el error
        //AQUI SE MANEJA EL ERROR (ejemplo: una imge de error o colocar algun mensaje)
        // console.error(`Este es el error que atrapo el catch: \n`, error); // Para salto de linea: \n 
        return 'No existe';
    
    }
}

getImage();



// Fectch API
// const apiKey= 'q30x2yRuGnDfDvhh28edIJ3vKVnnM89t';
// El fetch devolvera una promesa <response>
// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
// SIMPLIFICANDO el codigo de then y ENCADENACION DE PROMESAS
// peticion
//     .then(respuesta => respuesta.json())
//         .then(({data}) => { //SE obtendrra la dadta dentro de otra data, para solucionar eso se utilizara la desestrocturacion
//             /*Para conseguir la url de una imagen, indicaremos su direccion atravez de "."  
//             console.log(data.images.original.url);*/
//            //utilizareemos desestructuracion pra almacenar la url:
//            const {url} = data.images.original;
//            //para colocar la imgen en nuestra pagina debemos colocar lo siguiente:
//            const img = document.createElement('img');// se crea la imagen
//            img.src=url; // el src de la imgen sertan igual a la url que obtuvimos
//            document.body.append(img); //Ahora se coloca la imgen en el html
//         })
//     .catch(console.warn);//ES SUFICIENTE TENER UN SOLO catch


//Para el Test
export{
    getImage,
}
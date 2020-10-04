// Fectch API
const apiKey= 'q30x2yRuGnDfDvhh28edIJ3vKVnnM89t';

//El fetch devolvera una promesa <response>
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

/*
peticion.then( (respuesta) => {
   //console.log(respuesta); //para visulizar la respuesta de la peticion
   //LA INFORMACION QUE NOS INTERESA ESTA EN EL APARTADO "body: ReadableStream", para visualizar su contenido se hara uso del metodo .json()
   respuesta.json().then((data)=>{
       console.log(data); //con esto se obtendra la data de todas la imgenes.
   });
}).catch(console.warn)
*/

//SIMPLIFICANDO el codigo de then y ENCADENACION DE PROMESAS
peticion
    .then(respuesta => respuesta.json())
        .then(({data}) => { //SE obtendrra la dadta dentro de otra data, para solucionar eso se utilizara la desestrocturacion
            
            /*Para conseguir la url de una imagen, indicaremos su direccion atravez de "."  
            console.log(data.images.original.url);
            */
           //utilizareemos desestructuracion pra almacenar la url:
           const {url} = data.images.original;

           //pra colocar la imgen en nuestra pagina debemos colocar lo siguiente:
           const img = document.createElement('img');// se crea la imagen
           img.src=url; // el src de la imgen sertan igual a la url que obtuvimos
           document.body.append(img); //Ahora se coloca la imgen en el html

        })
    .catch(console.warn);//ES SUFICIENTE TENER UN SOLO catch



    
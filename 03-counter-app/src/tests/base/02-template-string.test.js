// USANDO .toBe()
import { getSaludo } from '../../base/02-template-string'; // se importa el metodo saludo
import '@testing-library/jest-dom'; //No dara sujerencias de metodos test a utilizar como ser el "toBe()"



//Nota en el archivo 02-template-string.js no deberia tener impresion de consolas ya que nos confundiria con la prueba
describe("pruebas en 02-template-string.js", ()=>{

    test("getSaludo debe devolver Hola Ariel", ()=>{
        //1 inicializacion
        const nombre="Ariel";

        //2 estimulo
        const saludo=getSaludo(nombre)// se envia el argumento nombre

        //observar comportamiento
        expect(saludo).toBe(`Hola ${nombre}`);
    })
   
    //Tarea getSaludo debe retornar Hola Carlos si no hay argumento nombre
    test("getSaludo debe retornar Hola Carlos si no hay argumento nombre",()=>{
        //inicializacion
        const nombre2="Carlos";
        //estimulo
        const saludodefault=getSaludo(); //no se envia el argumento nombre
        // observar comportamiento
        expect(saludodefault).toBe(`Hola ${nombre2}`);
    })

});
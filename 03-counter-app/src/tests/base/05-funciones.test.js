// USANDO .toEqual()
import { getUser, getUsuarioActivo } from '../../base/05-funciones'
import '@testing-library/jest-dom'; //para tner las recomendaciones de metodo de testin como ser: toBe() y toEqual()

describe("Archivo 05-funciones.js", ()=>{

    test('Debe devolver un objeto(un diccionario)', ()=>{
        //inicializar 
        const datosEsperados={
            uid:'ABC123',
            username:'El_papi1234',
        }
        //estimulo
        const datosObtenidos=getUser();

        //Observar comportamiento
        //PARA COMPARAR 2 OBJETOS(SUS PROPIEDADES Y VALORES) SE UTILIZA EL "toEqual"
        expect(datosObtenidos).toEqual(datosEsperados);
    })


    //tarea
    test('getUserActivo debe retornar un objeto',()=>{
        //inicializacion
        //const nombre='Ariel';
        const objetoEsperado={
            uid:'ABC567',
            username:'Ariel',//username:nombre,
        }
        //estimulo
        const objetoObtenido=getUsuarioActivo('Ariel');//(nombre)
        //Observar el comportamiento
        expect(objetoObtenido).toEqual(objetoEsperado);
    })

})
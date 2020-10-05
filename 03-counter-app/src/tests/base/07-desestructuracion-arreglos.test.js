import '@testing-library/jest-dom';
import { retornarArreglo } from '../../base/07-desestructuracion-arreglos';


describe('Pruebas en Archivo 07-desestrocturacion-arreglos',()=>{

    test('La funcion debe retornar una arreglo con un string y un entero',()=>{
        //inicializacion
        const arregloEsperado=['ABC',123];
        //estimulo
        const arregloObtnido=retornarArreglo();
        //Observar comportamiento
        expect(arregloObtnido).toEqual(arregloEsperado);
    })

    //UTILIZANDO DESESTROCTURACION
    test('UTILIZANDO DESESTROCTURACION: La funcion debe retornar una arreglo con un string y un entero',()=>{
       //inicializacion
       const [letras, numeros] = retornarArreglo();
       //Para saber el typo de una variable se utiliza "typeof" seguido de la variable;
       console.log(`Letras: ${letras} Tipo: ${typeof letras}  -|-  Numeros: ${numeros} Tipo: ${typeof numeros}`);
       
       expect(letras).toBe('ABC');
       expect(typeof letras).toBe('string');

       expect(numeros).toBe(123);
       expect(typeof numeros).toBe('number');//ESTA ES UNA PRUEBA UTIL POR QUE SI NO SABEMOS QUE NUMERO SE COMPARARA(UN ALEATORIO), PODEMOS VERIFICAR ALMENOS QUE LA VARIABLE SEA TIPO NUMBER
    })
})
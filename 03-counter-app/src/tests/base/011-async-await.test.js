import '@testing-library/jest-dom';
import { getImage } from '../../base/011-async-await';

describe('Pruebas del archivo 011-async-await',()=>{

    test('getiamgen debe devolver una url',async()=>{//como se utilizara una promesa asincronica ponesmos async
        //inicializacion y estimulo
        const url= await getImage(); // como es una promesa utilizamos el await para esperar que termine de ejecutarse dicha promesa.
        //ver comportamiento
        console.log(url);
        //expect(typeof url).toBe('string');//UTILIZAMOS typeof y toBe() por que la url es aleatoria. SIN EMBARGO CUANDO LA PROMESA NOS REGRESE 'No esxiste' por el catch este al ser string pasara la prueba.      
        
        //OTRA FORMA:
        //includes() verifica que la cadena contenga lo que se especifique por parametro, devolviendo true o false 
        expect(url.includes('https://')).toBe(true);
        
    });


});
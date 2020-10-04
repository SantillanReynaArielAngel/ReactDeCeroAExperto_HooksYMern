
//Jest - Expert -toBe
//Para hacer correr el test: npm run test

    

//describe(), sive para agrupar las pruebas;
describe('Pruebas en el archivo Demo.test.js', () => {
        
        test("1ra Prueba: isActive", ()=>{
            const isActive=true;
            if(!isActive){
                throw new Error("No esta activo");
            }else{
                console.log("1ra Prueba-correcta: El virus no esta activo")
            }
        })

        // revisar la documentacion de jest (.toBe()) -->   https://jestjs.io/docs/en/expect#tobevalue
        test('2da Prueba: Deben ser iguales los strings', ()=>{
        
            //1. Inicializacion
            const mensaje='Hola Mundo';
        
            //2. Estimulo
            const mensaje2="Hola Mundo";
        
            //3. Observar el comportamiento
            expect(mensaje).toBe(mensaje2);
        })

    });


    
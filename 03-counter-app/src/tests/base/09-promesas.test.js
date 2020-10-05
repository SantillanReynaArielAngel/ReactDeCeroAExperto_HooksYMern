import '@testing-library/jest-dom'
import { getHeroeByIdAsync } from '../../base/09-promesas'
import { heroes } from '../../data/heroes';

//IMPORTANTE SIEMPRE QUE SE HAGA TEST CON PROMESA SE DEBE UTILIZAR 'done', ya que la prueba pasa sin terminar la promesa y esto nos dara un falso positivo.
// done indica que debe terminar la prueba, si no encuentra un expect o no se encotro la llamda al done()
describe('Pruebas en el achivo 09-promesas',()=>{

    test('getHeroeByAsync debe retornar un heroe async',( done )=>{
        
        //inicializacion
        const id=1;
        getHeroeByIdAsync(id)//retorna una promesa; tiene 1500 mm para resolver, si encuentra el heroe lo devuelve caso contrario devulve un error(aviso)
            .then(heroe=>{//este heroe es el producto(lo que se devuelve) de la funcion getHeroeByIdAsync 
                console.log(heroe);
                console.log(heroes[0]);//este es el primer elemento del array heroes del acrivos heroes.js
                expect(heroe).toBe(heroes[0]);
                done();// llamda al done()
            });
    });

    test('Debe obtener un error si el heroe por id no existe',(done)=>{
        const id=10;
        getHeroeByIdAsync(id).catch(ErrorDelReject=>{
            expect(ErrorDelReject).toBe('NO SE PUEDO ENCONTRAR EL HEROE (funcion getHeroeByIdAsync)');
            done();
        });
    });
})
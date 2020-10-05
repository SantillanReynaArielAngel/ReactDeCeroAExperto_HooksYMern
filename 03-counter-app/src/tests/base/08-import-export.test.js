import '@testing-library/jest-dom';
import { getHeroeById, getHeroeByOwner } from '../../base/08-import-export';
import { heroes } from '../../data/heroes';
describe('Pruebas en funciones de heroes',()=>{
    test('Debe retornar un heroe por id',()=>{
        //inicializacion:
        const id=1;

        //estimulo
        const heroe=getHeroeById(id);
        const heroeData=heroes.find(h=>h.id===id);
        //observar comportamiento.
        //console.log(heroe);
        expect(heroe).toEqual(heroeData);
    })

    test('Debe retornar undefine si el heroe no existe',()=>{
        //inicializacion:
        const id=20;
        //estimulo
        const heroe=getHeroeById(id); //solo tratamos de recuperar un heroe;
        //observar comportamiento.
        //console.log(heroe);
        expect(heroe).toBe(undefined);//se puede utilizarundefinid de esta forma ya que es un valor primitivo
    })

    //Tarea 

    //debe retornar un arreglo con los heroes de DC
    //evaluar por owner
    //toEqual al arreglo filtrado(filter)
    test('Debe retornar un arreglo con los heroes de DC',()=>{
        //hecho por nosotros:

        // //inicializar
        // const owner='DC';
        // const heroesDC=[1,3,4];
        // let heroeData=[];
        // //estimulo
        // //const heroesDC=getHeroeByOwner(owner);
        // heroes.forEach((heroe)=>{
        //         if(heroe.owner===owner){
        //             heroeData.push(heroe.id);
        //         }
        //     });
        // console.log(heroesDC);
        // console.log(heroeData);

        // //observar comportamiento
        // expect(heroeData).toEqual(heroesDC);


        //FORMA RECOEMNDADA:
        //inicializacion:
        const owner='DC';
        //estimulo
        const heroes=getHeroeByOwner(owner);//obtenido
        const heroesData=heroes.filter(h=>h.owner===owner);//esperado
        console.log(heroes);
        console.log(heroesData);
        //comportamiento
        expect(heroes).toEqual(heroesData);
    })

    //debe retornar un arreglo con los heroes de Marvel
    // length = 2
    //toBe()
    test('Debe retornar un arreglo con los heroes de Marvel(longutud)',()=>{
        
        //LO QUE NOSOTROS HICIMOS:
        //inicializacion
        // const owner='Marvel'
        // const heroesMarvel=[2,5];
        // let heroeData=[];
        // //estimulo
        // heroes.forEach((heroe)=>{
        //     if(owner===heroe.owner){
        //         heroeData.push(heroe.id);
        //     }
        // });
        // console.log(heroesMarvel.length);
        // console.log(heroeData.length);
        // //observar comportamiento
        // expect(heroeData.length).toBe(heroesMarvel.length);


        //FORMA RECOEMNDADA
        //inicializacion
        const owner='Marvel';
        //estimulo
        const heroes=getHeroeByOwner(owner);//obtenido
        console.log(heroes);
        //observar comportamiento
        expect(heroes.length).toBe(2);
    })

})
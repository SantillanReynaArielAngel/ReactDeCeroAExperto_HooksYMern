import React from 'react';
import { shallow } from 'enzyme'

import CounterApp from '../CounterApp';


describe('Pruebas en el <CounterApp/>', ()=>{
   
    let wrapper=shallow(<CounterApp />);//Se establece como variable global por que se reutilizara en varios test

    // beforeEach, sirve para inicializar wrapper en cada vez que se ejecute una prueba, caso contrario wrapper guardara los valores modificados del test anterior
    beforeEach(()=>{
        wrapper=shallow(<CounterApp />);
    });

   test('Debe Mostrar <CounterApp />', ()=>{

        expect(wrapper).toMatchSnapshot();
   });

   test('Debe mostrar el valor por defecto de 100', ()=>{
        const value=100;
        const wrapper=shallow(<CounterApp value={value}/>);

        const counterText=wrapper.find('h2').text().trim();
        //console.log(`xxx${counterText}xxxx`);
        expect(counterText).toBe('100');
   });

   test('Debe incrementar con el boton +1',()=>{
        //const btn1=wrapper.find('button').at(0).simulate('click');
        //console.log(btn1.html());// con esto observamos el codico del botton
        wrapper.find('button').at(0).simulate('click');
        const counterText=wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');
   });

   test('Debe decrementar con el boton -1',()=>{
    
    //const btn3=wrapper.find('button').at(2).simulate('click');
    //console.log(btn3.html()); //con esto observamos el codico del botton
        wrapper.find('button').at(2).simulate('click');
        const counterText=wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');
});

    test('Debe colocar el valor por defecto con el btn reset',()=>{
        //Inicializamos CounterApp con el valor de 105
        const wrapper=shallow(<CounterApp value={105}/>);

        //Simulamos que tocamos el boton de incrementar
        wrapper.find('button').at(0).simulate('click'); //106
        wrapper.find('button').at(0).simulate('click'); //107
        
        //Ahora resetearemos en valor a 105
        wrapper.find('button').at(1).simulate('click');

        const counterText=wrapper.find('h2').text().trim();
        console.log(counterText);//Saldra counter app con 105

        expect(counterText).toBe('105');

    });
    
});





import {Futbolista2} from './futbolista2';


describe('Fubolista 2 Emit', () => {

    let futbolista: Futbolista2;
    beforeEach(()=> futbolista = new Futbolista2()); //esta linea se va a ejecutar antes de cada prueba
        it('Debe emitir un evento cuando recibe danio', () => {
            let nuevoHP = 0;
            futbolista.hpCambia.subscribe( hp => {
                nuevoHP = hp;
            });
            futbolista.recibeDanio(1000);
            expect ( nuevoHP ).toBe(0);
       
        });

        it('Debe emitir un evento cuando recibe danio y sobrevivir si es menor de 100', () => {
            let nuevoHP = 0;
            futbolista.hpCambia.subscribe( hp => nuevoHP = hp);
            futbolista.recibeDanio(50);
            expect ( nuevoHP ).toBe(50);
       
        });
      

});
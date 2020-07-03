import { incrementar } from "./numeros";


describe('Pruebas básicas de números', () => {

    it('Debe retornar 300, si el nro ingresado es mayor a 300', () => {

        const resp = incrementar(400);

        expect( resp ).toBe(300);

       
    });

    it('Debe retornar el nro ingresado +1, si el nro ingresado no es mayor a 300', () => {

        const resp = incrementar(100);

        expect( resp ).toBe(101);

       
    });
   
});
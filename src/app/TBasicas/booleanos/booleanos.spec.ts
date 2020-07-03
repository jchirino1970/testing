import { productoIngresado } from './booleanos';

describe('Pruebas básicas de Booleanos', () => {

    it('Debe regresar true', () => {

        const resp = productoIngresado();

        expect( resp ).toBeTruthy();
       
    });

       
});
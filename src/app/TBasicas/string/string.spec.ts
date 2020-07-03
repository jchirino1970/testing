import { mensaje } from "./string";



describe('Pruebas básicas de String', () => {

    it('Debe regresar un String', () => {

        const resp = mensaje('Calle San Ildefonso');

        expect( typeof resp ).toBe('string')
    });
    

    it('Debe contener  la dirección', () => {

        const direccion = 'Calle San Ildefonso';

        const resp = mensaje( direccion );

        expect( resp ).toContain( direccion);
    });


});
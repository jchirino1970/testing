import { obtenerPeliculas } from "./arreglos";


describe('Pruebas de arreglos', () => {

    it('Debe retornar al menos 3 peliculas', () => {

        const res = obtenerPeliculas();
        expect( res.length).toBeGreaterThanOrEqual(3);

       
    });


    it('Debe existir  SuperMan y Nemo', () => {

        const res = obtenerPeliculas();
        expect( res).toContain('SuperMan');
        expect( res).toContain('Nemo');
      
    });

       
});
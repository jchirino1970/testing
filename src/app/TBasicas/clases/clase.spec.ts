import { Futbolista } from "./clase";


describe('Pruebas de clases', () => {

    let futbolista = new Futbolista();
    beforeEach(() => {

        futbolista = new Futbolista();
    })


    it('Debe retornar 80 hp, si el fuboilista recibe 20 de danio', () => {

        //const futbolista = new Futbolista();
        const resp = futbolista.recibeDanio(20);

        expect(resp).toBe(80);

    });

    it('Debe retornar 70 hp, si el fuboilista recibe 50 de danio', () => {

        //const futbolista = new Futbolista();
        const resp = futbolista.recibeDanio(70);

        expect(resp).toBe(30);

    });


    it('Debe retornar 0 hp, si el fuboilista recibe 100 de danio o más', () => {

        //const futbolista = new Futbolista();
        const resp = futbolista.recibeDanio(100);

        expect(resp).toBe(0);

    });

});
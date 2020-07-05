import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => {

        componente = new MedicosComponent(servicio);
        
    });


    it('Init: Debe cargar los médicos', () => {

        const medicos = ['medico1', 'medico2', 'medico3']

        spyOn( servicio, 'getMedicos' ).and.callFake( () => {
  
            return Observable.from([[ medicos  ]]);

        });

        componente.ngOnInit();
        expect ( componente.medicos.length ).toBeGreaterThan(0);
   
    });

    it('El metodo agregar es llamado', () => {

       const espia = spyOn( servicio, 'agregarMedico' ).and.callFake( medico =>{

          return Observable.empty();

       });

       componente.agregarMedico();
       expect (espia).toHaveBeenCalled();
   
    });

    it('Se agrega un medico', () => {

        //simulamos que tenemos un medico

        const medico = {id:1, nombre: 'Pedro' };

        spyOn( servicio, 'agregarMedico' ).and.returnValue(Observable.from([medico]));

        componente.agregarMedico();

        //expect( componente.medicos.length).toBe(1); Esta es otra forma de evaluarlo

        expect( componente.medicos.indexOf (medico)).toBeGreaterThanOrEqual(0); //estamos confirmando  que el medico que nos arrojo el espia este incluido en el arreglo del componente.
    
     });

     it('Si falla agregarMedico, la propiedad mensajeError, debe ser igual al error', () => {

        const miError = 'No se pudo agregar el médico';

        spyOn( servicio, 'agregarMedico').and.returnValue( Observable.throw( miError));


        componente.agregarMedico();

        expect( componente.mensajeError ).toBe( miError);
    
     });

     it('Se llama al servicio para borrar un médico', () => {

        spyOn ( window, 'confirm' ).and.returnValue(true); //simulamos el confirn

        //lo que nos interesa saber es que la función sea llamada
        const espia = spyOn( servicio, 'borrarMedico' ).and.returnValue( Observable.empty());

        componente.borrarMedico('1');
        expect ( espia ).toHaveBeenCalledWith('1');
    
     });









});

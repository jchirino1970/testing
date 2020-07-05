import { FormularioRegister } from './formulario';
import { FormBuilder } from '@angular/forms';



describe('Formularios', () => {

    let componente: FormularioRegister;

    //antes de que se ejecute cada prueba inicializamos el componente 
    beforeEach(() => {

        componente = new FormularioRegister(new FormBuilder());

    });

    it('Se debe crear un formulario con dos campos, email y password', () => {

        expect(componente.form.contains('email')).toBeTruthy();
        expect(componente.form.contains('password')).toBeTruthy();

    });


    it('El campo email es obligatorio', () => {

        const control = componente.form.get('email');
        control.setValue('');
        expect(control.valid).toBeFalsy();

    });

    it('El campo email debe ser valido', () => {

        const control = componente.form.get('email');
        control.setValue('jenis@yahoo.com');
        expect(control.valid).toBeTruthy();

    });








});
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let appComponent;

  beforeAll(()=>{
    console.log('beforeAll Se ejecuta al iniciar las pruebas, pero una sola vez')
  })


  afterAll(()=>{
    console.log(' afterAll Se ejecuta al finalizar las pruebas, pero una sola vez')
  })
//ciclo de vida de nuestras pruebas

//afterAll :  Se ejecuta al finalizar las pruebas
//afterEach : Se ejecuta despues de cada caso de prueba es decir despues de cada "it"
//beforeEach : Se ejecuta antes de cada caso de prueba es decir antes de cada "it"
//beforeAll : Se ejecuta solo una vez despues del describe



beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    //instanciamos aqui nuestro componente
    appComponent = new AppComponent();
  }));


  afterEach(()=>{
     console.log('afterEach')

  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  
  it('El valor de myVar debe ser Hola Mundo', () => {
   // const appComponent = new AppComponent();
    const valor = appComponent.myVar
    expect(valor).toEqual('Hola Mundo')
  });

  it('La variable saludo debe contener Jhonatan', () => {
    //const appComponent = new AppComponent();
    const valor = appComponent.saludo
    expect(valor).toContain('Buenos dias Jhonathan');
  });

  it('Debe retornar TRUE', () => {
   // const appComponent = new AppComponent();
    const respuesta  = appComponent.par(44)
    expect(respuesta).toBeTruthy();
  });

  it('Debe retornar FALSE', () => {
    //const appComponent = new AppComponent();
    const respuesta  = appComponent.par(15)
    expect(respuesta).toBeFalse();
  });


});

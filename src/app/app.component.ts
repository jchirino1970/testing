import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myVar = 'Hola Mundo';
  saludo = 'Buenos dias Jhonathan';

par(numero:number):boolean {
   return numero%2===0 ? true : false
}

}

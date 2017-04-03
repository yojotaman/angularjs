import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola jonathan';
  nombre = 'jonathan';

  eventoClick():void{
    //console.log("hola estoy ecuchando");
    this.nombre = this.nombre.toUpperCase();
  }
}

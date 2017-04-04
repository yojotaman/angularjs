import { Component } from '@angular/core';

import { InputComponent } from './input/input.component';

import {TicketService} from './services/ticket.service';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  votacion='';
  votos=[
    {title:'opción 1'},
    {title:'opción 2'},
    {title:'opción 3'},
    {title:'opción 4'}
  ];
  tickets:any;

  myForm: FormGroup;

  constructor (
    private ticketService: TicketService,
    private fb: FormBuilder
    ){
    this.tickets = ticketService.getTickets(); // Aquí puedo hacer el llamado del metodo para //obtener todos los ticktets  
    // valor por defecto
    this.myForm = fb.group({
      'name': ['Jonathan']
    });
    
  }
  

  addVoto(response:string){
    this.votacion = "Usted eligió: " + response;
  }

  cantidad = 5;
  factor = 1;

  onSubmit(value:string): void {
    console.log('El fomulario tiene:', value);
  }
    
}

import { Component } from '@angular/core';

import { InputComponent } from './input/input.component';

import {TicketService} from './services/ticket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  votacion='';
  tickets:any;



  constructor (private ticketService: TicketService){
    this.tickets = ticketService.getTickets(); // Aquí puedo hacer el llamado del metodo para //obtener todos los ticktets  
  }

  votos=[
    {title:'opción 1'},
    {title:'opción 2'},
    {title:'opción 3'},
    {title:'opción 4'}
  ];

  addVoto(response:string){
    this.votacion = "Usted eligió: " + response;

  }
  cantidad = 5;
  factor = 1;

  onSubmit(form: any): void {
    console.log('El fomulario tiene:', form);
  }
    
}

import { Injectable } from '@angular/core';
import { TICKETS } from './mocks/tickets.mock';
@Injectable()
export class TicketService{

    miVariableTicketGlobal = "soy una variable"; // podemos crear variables globales en cualquier componente

    getTickets(){
        return TICKETS; // regresamos todos los tickets
    }

    getVariableGlobal():string{
        return this.miVariableTicketGlobal;
    }

}
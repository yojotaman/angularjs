import { Injectable } from '@angular/core';
import { TICKETS } from './mocks/tickets.mock';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class TicketService{

    miVariableTicketGlobal = "soy una variable"; // podemos crear variables globales en cualquier componente

    getTickets(){
        return TICKETS; // regresamos todos los tickets
    }

    getVariableGlobal():string{
        return this.miVariableTicketGlobal;
    }

    getTicket(id:number){
        let ticket = TICKETS.find(x => x.id === id);
        return ticket;
    }

     getTicketObserver(id) {
        return Observable.create(observer => {
            setTimeout(() => {
            observer.next(TICKETS.find((ticket) => ticket.id == id))
            }, 3000);
        });
    }

}
import { Component, NgZone } from '@angular/core';

import { InputComponent } from './input/input.component';

import {TicketService} from './services/ticket.service';

import { FormBuilder, FormGroup } from '@angular/forms';

import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './services/counter';
import {Observable} from 'rxjs/Observable';

interface AppState {
  counter: number;
}

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

  counter: Observable<number>;

  constructor (
    private ticketService: TicketService,
    private fb: FormBuilder,
    private store: Store<AppState>,
    private _ngZone: NgZone
    ){
    this.counter = store.select('counter');
    this.tickets = ticketService.getTickets(); // Aquí puedo hacer el llamado del metodo para //obtener todos los ticktets  
    // valor por defecto
    this.myForm = fb.group({
      'name': ['Jonathan']
    });
    
  }
  
   increment(){
        this.store.dispatch({ type: INCREMENT });
    }

    decrement(){
        this.store.dispatch({ type: DECREMENT });
    }

    reset(){
        this.store.dispatch({ type: RESET });
    }

  addVoto(response:string){
    this.votacion = "Usted eligió: " + response;
  }

  cantidad = 5;
  factor = 1;

  onSubmit(value:string): void {
    console.log('El fomulario tiene:', value);
  }

//http://thoughtram.io/
  progress: number = 0;
  label: string;

  processWithinAngularZone() {
    this.label = 'inside';
    this.progress = 0;
    this._increaseProgress(() => console.log('Finalizado sin Zone!'));
  }
  processOutsideOfAngularZone() {
    this.label = 'outside';
    this.progress = 0;
    this._ngZone.runOutsideAngular(() => {
      this._increaseProgress(() => {
        this._ngZone.run(() => { 
          console.log('Finalizado con Zone!') 
        });
      
      });
    });
  }
  
  _increaseProgress(doneCallback: () => void) {
    this.progress += 1;
    console.log(`Progreso: ${this.progress}%`);
    
    if (this.progress < 100) {
      window.setTimeout(() => {
        this._increaseProgress(doneCallback);
      }, 10);
    } 
    else {
      doneCallback();
    }
  }  
    
}

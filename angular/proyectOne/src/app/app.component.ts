import { Component } from '@angular/core';

import { InputComponent } from './input/input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';


  votos=[
    {title:'opción 1'},
    {title:'opción 2'},
    {title:'opción 3'},
    {title:'opción 4'}
  ]
}

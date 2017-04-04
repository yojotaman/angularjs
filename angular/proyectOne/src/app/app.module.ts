import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PageNotFoundComponent} from './pageNotfound/page.not.found.component';
import { InitComponent} from './init.component';
import { TicketDetail } from './tickets/ticket.detail';

// input
import {InputComponent} from './input/input.component';

//pipes
import {ConversorPipe } from './pipes/conversor.pipe';

//directives
import {HighlightDirective} from './directives/highlight.directive';
import {GigantDirective} from './directives/gigant.directive';

//service
import {TicketService} from './services/ticket.service';

//FORMS
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//NGRx
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './services/counter';

//routes
import {RouterModule, Routes} from '@angular/router';
import {APPROUTER} from './commons/router';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ConversorPipe,
    HighlightDirective,
    GigantDirective,
    PageNotFoundComponent,
    InitComponent,
    TicketDetail
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.provideStore({ counter: counterReducer }),
    RouterModule.forRoot(APPROUTER)
  ],
  providers: [TicketService],
  bootstrap: [InitComponent]
})
export class AppModule { }

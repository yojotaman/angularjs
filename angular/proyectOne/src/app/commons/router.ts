import { Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { PageNotFoundComponent } from '../pageNotfound/page.not.found.component';

export const APPROUTER: Routes = [
  { path: '', component: AppComponent },
  { path: '**', component: PageNotFoundComponent }
];
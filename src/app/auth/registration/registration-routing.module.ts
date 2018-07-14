import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { RegistrationComponent } from './registration.component';

const ROUTES: Routes = [
  { path: '', component: RegistrationComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule ],
  declarations: []
})
export class RegistrationRoutingModule { }

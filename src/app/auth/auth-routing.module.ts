import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'registration', loadChildren: './registration/registration.module#RegistrationModule' }
];

@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AuthRoutingModule { }

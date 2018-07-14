import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { LoginComponent } from './login.component';

const ROUTES: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule ],
  declarations: []
})
export class LoginRoutingModule { }

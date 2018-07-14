import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { LoginRoutingModule } from './login-routing.module';

// components
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }

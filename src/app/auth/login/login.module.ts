import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { LoginRoutingModule } from './login-routing.module';

// modules
import { SharedModule } from '../../shared/shared.module';

// components
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }

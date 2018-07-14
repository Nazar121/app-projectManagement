import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { RegistrationRoutingModule } from './registration-routing.module';

// modules
import { SharedModule } from '../../shared/shared.module';

// components
import { RegistrationComponent } from './registration.component';

@NgModule({
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    SharedModule
  ],
  declarations: [
    RegistrationComponent
  ]
})
export class RegistrationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { RegistrationRoutingModule } from './registration-routing.module';

// components
import { RegistrationComponent } from './registration.component';

@NgModule({
  imports: [
    CommonModule,
    RegistrationRoutingModule
  ],
  declarations: [
    RegistrationComponent
  ]
})
export class RegistrationModule { }

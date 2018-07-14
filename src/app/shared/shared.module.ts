import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { MaterialModule } from "./material/material.module";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ MaterialModule ],
  declarations: []
})
export class SharedModule { }

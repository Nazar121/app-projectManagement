import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { MaterialModule } from "./material/material.module";

// components
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ MaterialModule ],
  declarations: [
    DeleteDialogComponent
  ],
  entryComponents: [
    DeleteDialogComponent
  ]
})
export class SharedModule { }

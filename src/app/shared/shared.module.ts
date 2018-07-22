import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { MaterialModule } from "./material/material.module";

// services
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

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
  ],
  providers: [
    AuthService,
    AuthGuardService
  ]
})
export class SharedModule { }

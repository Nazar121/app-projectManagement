import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatDialogModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatRadioModule,
    MatTooltipModule,
    MatSelectModule,
    MatBadgeModule
  ],
  exports: [
    ReactiveFormsModule,

    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatDialogModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatRadioModule,
    MatTooltipModule,
    MatSelectModule,
    MatBadgeModule
  ],
  declarations: []
})
export class MaterialModule { }

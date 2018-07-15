import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { BoardsComponent } from './boards.component';

const ROUTES: Routes = [
  { path: '', component: BoardsComponent, children: [
    
  ]}
];

@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule ],
  declarations: []
})
export class BoardsRoutingModule { }

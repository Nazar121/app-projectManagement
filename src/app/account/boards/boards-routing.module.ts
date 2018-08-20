import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { BoardsComponent } from './boards.component';
import { CurrentBoardComponent } from './current-board/current-board.component';

const ROUTES: Routes = [
  { path: '', children: [
    { path: '', component: BoardsComponent },
    { path: ':boardId', component: CurrentBoardComponent }
  ]}
];

@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule ],
  declarations: []
})
export class BoardsRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { BoardsComponent } from './boards.component';
import { CurrentBoardComponent } from './current-board/current-board.component';
import { CurrentSprintComponent } from './current-board/current-sprint/current-sprint.component';

const ROUTES: Routes = [
  { path: '', children: [
    { path: '', component: BoardsComponent },
    { path: ':boardId', children: [
      {
        path: '',
        component: CurrentBoardComponent
      }, {
        path: 'sprint',
        component: CurrentSprintComponent
      }
    ] }
  ]}
];

@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule ],
  declarations: []
})
export class BoardsRoutingModule { }

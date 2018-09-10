import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { BoardsRoutingModule } from './boards-routing.module';

// modules
import { SharedModule } from '../../shared/shared.module';

// components
import { BoardsComponent } from './boards.component';
import { BoardComponent } from './board/board.component';
import { CEBoardDialogComponent } from './ce-board-dialog/ce-board-dialog.component';
import { CESprintDialogComponent } from './current-board/ce-sprint-dialog/ce-sprint-dialog.component';
import { CurrentBoardComponent } from './current-board/current-board.component';
import { InfoComponent } from './current-board/info/info.component';
import { SprintComponent } from './current-board/sprint/sprint.component';

@NgModule({
  imports: [
    CommonModule,
    BoardsRoutingModule,
    SharedModule
  ],
  declarations: [
    BoardsComponent,
    BoardComponent,
    CEBoardDialogComponent,
    CESprintDialogComponent,
    CurrentBoardComponent,
    InfoComponent,
    SprintComponent
  ],
  entryComponents: [
    CEBoardDialogComponent,
    CESprintDialogComponent
  ]
})
export class BoardsModule { }

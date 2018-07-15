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

@NgModule({
  imports: [
    CommonModule,
    BoardsRoutingModule,
    SharedModule
  ],
  declarations: [
    BoardsComponent,
    BoardComponent,
    CEBoardDialogComponent
  ],
  entryComponents: [
    CEBoardDialogComponent
  ]
})
export class BoardsModule { }

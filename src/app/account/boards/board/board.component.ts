import { Component, OnInit, Input } from '@angular/core';

// dialog
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { CEBoardDialogComponent } from '../ce-board-dialog/ce-board-dialog.component';
import { DeleteDialogComponent } from '../../../shared/components/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  // Input board
  @Input() board;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {}

  // dialog for delete board
  deleteBoardDialog(): void {
    let dialogRef = this.dialog.open(DeleteDialogComponent, {
      maxWidth: '400px',
      data: {
        message: 'You really want delete this board ?'
      }
    });

    dialogRef.afterClosed().subscribe((res: boolean) => {
      console.log('Delete board ', res);
      if ( res ) {
        this.deleteBoard();
      }
    });
  }

  // dialog for edit board
  CEBoardDialog(): void {
    let dialogRef = this.dialog.open(CEBoardDialogComponent, {
      maxWidth: '500px',
      data: { ...this.board, createBoard: false }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed.  board is ', result);
    });
  }

  // delete board
  deleteBoard() {
    console.log('DELETE board ');
  }

}

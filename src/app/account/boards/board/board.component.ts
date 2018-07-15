import { Component, OnInit } from '@angular/core';

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

  board: any;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.board = {
      name: 'Angular 6',
      image: '',
      created: new Date().getTime()
    }
  }

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
  openDialog(): void {
    let dialogRef = this.dialog.open(CEBoardDialogComponent, {
      maxWidth: '500px',
      data: {
        create: false,
        value: { ...this.board }
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed.  board is ', result);
    });
  }

  // edit board
  editBoard() {
    this.openDialog();
  }

  // delete board
  deleteBoard() {
    console.log('DELETE board ');
  }

}

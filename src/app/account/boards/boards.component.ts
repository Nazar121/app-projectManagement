import { Component, OnInit } from '@angular/core';

// dialog
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { CEBoardDialogComponent } from './ce-board-dialog/ce-board-dialog.component';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  boards: any = [
    {
      name: 'Angular 6',
      bg: {
        selected: 'color',
        color: '#ffffff',
        photo: ''
      },
      created: new Date().getTime()
    },
    {
      name: 'JavaScript',
      bg: {
        selected: 'color',
        color: '#ffffff',
        photo: ''
      },
      created: new Date().getTime()
    },
    {
      name: 'Node.js',
      bg: {
        selected: 'color',
        color: '#ffffff',
        photo: ''
      },
      created: new Date().getTime()
    }
  ];

  users:any;

  constructor(
    public dialog: MatDialog
  ) {}

  ngOnInit() {
  }

  // dialog for edit board
  CEBoardDialog(): void {
    let dialogRef = this.dialog.open(CEBoardDialogComponent, {
      maxWidth: '500px',
      data: {
        createBoard: true
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed.  board is ', result);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// services
import { BoardsService } from '../../shared/services/boards.service';
import { AuthService } from '../../shared/services/auth.service';

// dialog
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { CEBoardDialogComponent } from './ce-board-dialog/ce-board-dialog.component';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  // boards: any;
  boards: any;
  boardsFilter: any;

  constructor(
    public authService: AuthService,
    public boardsService: BoardsService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    // GET boards for user
    this.getUserBoards();
  }

  // GET boards for user
  getUserBoards() {
    this.boardsService.getUserBoards().subscribe(res => {
      this.authService.getUserId().subscribe(id => {
        const userId = id;
        this.boards = [];
        for (let key in res) {
          if (userId === res[key].createdId) {
            this.boards.push({
              createdId: userId,
              boardId: key,
              ...res[key]
            }); 
          }     
        }
        this.boardsFilter = this.boards;
        console.log('boards ', this.boards);
      });
    });
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

  // Search boards
  search(event) {
    let value = event.target.value;
    this.boardsFilter = this.boards.filter(obj => {
      return obj.name.toLowerCase().includes(value.toLowerCase());
    });
    console.log(this.boards);
  }

}

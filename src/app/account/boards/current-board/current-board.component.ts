import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// services
import { AuthService } from '../../../shared/services/auth.service';
import { BoardsService } from '../../../shared/services/boards.service';

// dialog
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { CESprintDialogComponent } from './ce-sprint-dialog/ce-sprint-dialog.component';

@Component({
  selector: 'app-current-board',
  templateUrl: './current-board.component.html',
  styleUrls: ['./current-board.component.scss']
})
export class CurrentBoardComponent implements OnInit {

  // Data
  boardId: string;
  userId: string;
  board: any;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public authService: AuthService,
    public boardsService: BoardsService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    // Get url params
    this.route.params.subscribe(params => {
      // console.log('params = ', params);
      this.boardId = params.boardId;

      // GET userId
      this.authService.getUserId().subscribe(res => {
        this.userId = res;

        this.getCurrentBoard();
      });

    });

  }

   // GET board
   getCurrentBoard() {
    this.boardsService.getCurrentBoard(this.boardId).subscribe(res => {
      this.board = res;
      this.board['boardId'] = this.boardId;
      if ( this.board && this.userId === this.board.createdId) {
        if ( this.board.sprints ) {
          const sprints = [];
          // tslint:disable-next-line:forin
          for (const key in this.board.sprints) {
            this.board.sprints[key]['sprintId'] = key;
            sprints.push(this.board.sprints[key]);
          }
          this.board.sprints = sprints;
        } else {
          this.board['sprints'] = [];
        }
        // console.log('currentBoard ', this.board);
      }
      else { this.authService.logout(); }
    });
  }

  // dialog for edit board
  CESprintDialog(): void {
    const dialogRef = this.dialog.open(CESprintDialogComponent, {
      maxWidth: '500px',
      data: {
        createSprint: true,
        sprint: `Sptint ${this.board.sprints.length + 1 }`
      }
    });

    dialogRef.afterClosed().subscribe(sprint => {
      // console.log('userId ', this.userId);
      if ( sprint && sprint.createSprint ) {
        delete sprint['createSprint'];
        this.boardsService.createSprint(this.board.boardId, sprint);
      }
    });
  }

}

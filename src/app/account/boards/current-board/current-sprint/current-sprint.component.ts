import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// services
import { AuthService } from '../../../../shared/services/auth.service';
import { BoardsService } from '../../../../shared/services/boards.service';

@Component({
  selector: 'app-current-sprint',
  templateUrl: './current-sprint.component.html',
  styleUrls: ['./current-sprint.component.scss']
})
export class CurrentSprintComponent implements OnInit {

  userId: string;
  boardId: string;
  sprintId: string;
  board: any;
  sprint: any;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public authService: AuthService,
    public boardsService: BoardsService,
  ) { }

  ngOnInit() {
    // Get url params
    this.route.params.subscribe(params => {
      // console.log('params = ', params);
      this.boardId = params.boardId;
    });

    this.route.queryParams.subscribe(params => {
      // console.log('queryParams = ', params);
      this.sprintId = params.sprintId;

      // GET userId
      this.authService.getUserId().subscribe(res => {
        this.userId = res;
        console.log('userId ', this.userId);
        console.log('boardId ', this.boardId);
        console.log('sprintId ', this.sprintId);

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
            // tslint:disable-next-line:forin
            for (const key in this.board.sprints) {
              this.board.sprints[key]['sprintId'] = key;
              if ( key === this.sprintId ) {
                this.sprint = this.board.sprints[key];
                console.log('SPRINT ', this.sprint);
              }
            }
            if ( !this.sprint ) {
              this.authService.logout();
            }
        }
        else { this.authService.logout(); }
      });
    }

}

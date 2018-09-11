import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// services
import { AuthService } from '../../../../shared/services/auth.service';
import { BoardsService } from '../../../../shared/services/boards.service';

// dialog
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { CESprintDialogComponent } from '../ce-sprint-dialog/ce-sprint-dialog.component';
import { DeleteDialogComponent } from '../../../../shared/components/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss']
})
export class SprintComponent implements OnInit {

  @Input() sprint;

  // Data
  boardId: string;
  userId: string;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public authService: AuthService,
    public boardsService: BoardsService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    // console.log('sprint ', this.sprint);

    // Get url params
    this.route.params.subscribe(params => {
      // console.log('params = ', params);
      this.boardId = params.boardId;

      // GET userId
      this.authService.getUserId().subscribe(res => {
        this.userId = res;
      });

    });
  }

  // dialog for edit sprint
  CESprintDialog(): void {
    const dialogRef = this.dialog.open(CESprintDialogComponent, {
      maxWidth: '500px',
      data: {
        createSprint: false,
        ...this.sprint
      }
    });

    dialogRef.afterClosed().subscribe(sprint => {
      if ( sprint && sprint.createSprint === false ) {
        delete sprint['createSprint'];
        this.boardsService.editSprint(this.boardId, sprint);
      }
    });
  }

  // dialog for delete sprint
  deleteSprintDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      maxWidth: '400px',
      data: {
        message: 'You really want delete this Sprint ?'
      }
    });

    dialogRef.afterClosed().subscribe((res: boolean) => {
      // console.log('Delete sprint ', res);
      if ( res ) {
        this.boardsService.deleteSprint(this.boardId, this.sprint.sprintId);
      }
    });
  }

  // Current sprint
  currentSprint() {
    this.router.navigate([`${this.router.url}/sprint`], { queryParams: { sprintId: this.sprint.sprintId} });
  }

}

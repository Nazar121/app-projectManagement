import { Component, OnInit, Inject } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators, FormControlName, FormGroupName } from '@angular/forms';

// services
import { AuthService } from '../../../../shared/services/auth.service';
import { BoardsService } from '../../../../shared/services/boards.service';

// for dialog
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-ce-sprint-dialog',
  templateUrl: './ce-sprint-dialog.component.html',
  styleUrls: ['./ce-sprint-dialog.component.scss']
})
export class CESprintDialogComponent implements OnInit {

  // UserId
  userId: string;

  // form
  formGroup: FormGroup;

  // @Input board, i have one property createBoard
  constructor(
    public authService: AuthService,
    public boardsService: BoardsService,
    public dialogRef: MatDialogRef<CESprintDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public board
  ) { }

  // close dialog
  closeDialog(res?): void {
    this.dialogRef.close(res);
  }

  ngOnInit() {
    // UserId
    this.authService.getUserId().subscribe(res => {
      this.userId = res; 
    });

    // default data for create board
    if (typeof this.board.createBoard === 'boolean' && this.board.createBoard) {
      this.board = Object.assign({ ...this.board }, {
        name: '',
        created: new Date().getTime()
      });
      console.log('Mat tvoyou, this.board.createBoard ', typeof this.board.createBoard);
    }
    console.log(this.board);

    // create: true | false
    this.formGroup = new FormGroup({
      name: new FormControl(this.board.name, [Validators.required]),
      image: new FormControl(''),
    });

  }

  // create || edit sprint
  save() {
    if ( this.board.createBoard ) {
      this.board['name'] = this.formGroup.value.name;
      this.board['createdId'] = this.userId;
      this.board['created'] = new Date().getTime();
      // CREATE
      delete this.board.createBoard;
      this.boardsService.createBoard(this.board);
    } else {
      this.board['name'] = this.formGroup.value.name;
      this.board['created'] = this.board.created;
      // EDIT
      delete this.board.createBoard;
      this.boardsService.editBoard(this.board);
    }

    console.log('Save Board ', this.board);
    // close dialog and response
    this.closeDialog(this.board.createBoard ? 'Create' : 'Edit');
  }

}

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

  // sprint
  sprint: any = {};

  // form
  formGroup: FormGroup;

  // @Input board, i have one property createBoard
  constructor(
    public authService: AuthService,
    public boardsService: BoardsService,
    public dialogRef: MatDialogRef<CESprintDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public settings
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

    // default data for sprint
    // console.log('settings ', this.settings);
    this.sprint = { ...this.settings };

    // create: true | false
    this.formGroup = new FormGroup({
      name: new FormControl((this.sprint.createSprint === true ? this.sprint.sprint :  this.sprint.name), [Validators.required])
    });

  }

  // create || edit sprint
  save() {
    let name = this.formGroup.value.name;
    let nameArr = name.split('');
    let firstL = nameArr[0].toUpperCase();
    nameArr[0] = firstL;
    name = nameArr.join('');

    if ( this.sprint.createSprint ) {
      this.sprint['name'] = name;
      this.sprint['createdId'] = this.userId;
      this.sprint['created'] = new Date().getTime();
    } else {
      this.sprint['name'] = name;
      this.sprint['updatedId'] = this.userId;
      this.sprint['updated'] = new Date().getTime();
    }

    // console.log('Save Sprint ', this.sprint);

    // close dialog and response
    this.closeDialog(this.sprint);
  }

}

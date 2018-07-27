import { Component, OnInit, Inject } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators, FormControlName, FormGroupName } from '@angular/forms';

// services
import { AuthService } from '../../../shared/services/auth.service';
import { BoardsService } from '../../../shared/services/boards.service';

// interfaces
// import { Board } from '../interfaces/interfaces';

// for dialog
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-ce-board-dialog',
  templateUrl: './ce-board-dialog.component.html',
  styleUrls: ['./ce-board-dialog.component.scss']
})
export class CEBoardDialogComponent implements OnInit {

  // UserId
  userId: string

  // form
  formGroup: FormGroup;

  // file img
  imagePreview: any = '';
  errorImgSize: boolean = false;

  // @Input board, i have one property createBoard
  constructor(
    public authService: AuthService,
    public boardsService: BoardsService,
    public dialogRef: MatDialogRef<CEBoardDialogComponent>,
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
        bg: {
          selected: 'color',
          color: '#ffffff',
          photo: ''
        },
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
    this.imagePreview = this.board.bg.photo;

  }

  // error image size
  onErrorImgSize() {
    this.errorImgSize = true;
    setTimeout(() => this.errorImgSize = false, 5000);
  }

  // file img
  fileImg(event) {
    if ( event.target.files.length > 0 ) {
      // max size image 5MB
      let maxSize = 5000000;
      if ( event.target.files[0].size <= maxSize ) {
        this.toBase64(event.target.files[0]).then((data) => {
          this.imagePreview = data;
        });
      } else {
        this.onErrorImgSize();
      }
    }
  }

  // file to base64
  toBase64(file: any) {
    const fileReader = new FileReader();
    return new Promise(resolve => {
        fileReader.readAsDataURL(file);
        fileReader.onload = function (e: any) {
            resolve(e.target.result);
        };
    });
  }

  // delete image
  deleteImg() {
    this.imagePreview = '';
  }

  // create || edit board
  save() {
    if ( this.board.createBoard ) {
      this.board['name'] = this.formGroup.value.name;
      this.board['createdId'] = this.userId;
      this.board['created'] = new Date().getTime();
      if (this.board.bg.selected === 'photo') {
        this.imagePreview ? this.board.bg['photo'] = this.imagePreview : this.board.bg['photo'] = '';
      }
      // CREATE
      delete this.board.createBoard;
      this.boardsService.createBoard(this.board);
    } else {
      this.board['name'] = this.formGroup.value.name;
      this.board['created'] = this.board.created;
      if (this.board.bg.selected === 'photo') {
        this.imagePreview ? this.board.bg['photo'] = this.imagePreview : this.board.bg['photo'] = '';
      }
      // EDIT
      delete this.board.createBoard;
      this.boardsService.editBoard(this.board);
    }

    console.log('Save Board ', this.board);
    // close dialog and response
    this.closeDialog(this.board.createBoard ? 'Create' : 'Edit');
  }

  // bg color or photo
  selectedBg(value) {
    if (value === 'color' || value === 'photo') {
      this.board.bg.selected = value;
    } else {
      this.board.bg.selected = 'color';
    }
  }

}

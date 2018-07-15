import { Component, OnInit, Inject } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators, FormControlName, FormGroupName } from '@angular/forms';

// for dialog
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-ce-board-dialog',
  templateUrl: './ce-board-dialog.component.html',
  styleUrls: ['./ce-board-dialog.component.scss']
})
export class CEBoardDialogComponent implements OnInit {

  // form
  formGroup: FormGroup;

  // file img
  imagePreview: any = '';
  errorImgSize: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<CEBoardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public settings: any
  ) { }

  // close dialog
  closeDialog(res?): void {
    this.dialogRef.close(res);
  }

  ngOnInit() {
    console.log(this.settings);

    // create: true | false
    this.formGroup = new FormGroup({
      name: new FormControl(this.settings.value.name, [Validators.required]),
      image: new FormControl(''),
    });
    this.imagePreview = this.settings.value.image;

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

  // create | edit category
  save() {
    const body = {};
    if ( this.settings.create ) {
      body['name'] = this.formGroup.value.name;
      body['created'] = new Date().getTime();
      this.imagePreview ? body['image'] = this.imagePreview : body['image'] = '';
      console.log('Create ', body);
    } else {
      body['name'] = this.formGroup.value.name;
      body['created'] = this.formGroup.value.created;
      this.imagePreview ? body['image'] = this.imagePreview : body['image'] = '';
      console.log('Edit ', body);
    }
    // close dialog and response
    this.closeDialog(this.settings.create ? 'Create' : 'Edit');
  }

}

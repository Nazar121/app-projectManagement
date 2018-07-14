import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators, FormControlName, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // login
  formGroup: FormGroup;

  // for show || hide password
  hidePassword: boolean;

  constructor() { }

  ngOnInit() {
    this.hidePassword = true;

    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, this.passwordLength])
    });
  }

  // User login
  login() {
    console.log(this.formGroup);
    const user = this.formGroup.value;
    console.log('USER ', user);
  }

  // pass length
  passwordLength(control: FormControl) {
    if (control.value.length < 4) {
      return {
        errorLength: true
      };
    }
    return null;
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators, FormControlName, FormGroupName } from '@angular/forms';
import { Router } from '@angular/router';

// services
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: any = [];

  // login
  formGroup: FormGroup;

  // for show || hide password
  hidePassword: boolean;

  constructor(
    public router: Router,
    public authService: AuthService
  ) {}

  ngOnInit() {
    // GET all users
    this.authService.getUsers().subscribe(users => {
      // console.log('users ', users);
      for (let key in users) {
        this.users.push({
          id: key,
          ...users[key]
        });
      }
      // console.log('users ', this.users);
    });

    // formGroup
    this.hidePassword = true;
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, this.passwordLength]),
      remember: new FormControl(false)
    });
  }

  // User login
  login() {
    // console.log(this.formGroup);
    const userLogin = this.formGroup.value;
    // console.log('USER ', userLogin);

    // if user is registraited
    this.users.map(user => {
      if (user.email === userLogin.email && user.pass === userLogin.pass) {
        // console.log('User is registraited ', user);
        const body = {
          remember: userLogin.remember,
          id: user.id
        };
        this.authService.login(body);
        this.router.navigate([`/account`]);
      }
    });
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

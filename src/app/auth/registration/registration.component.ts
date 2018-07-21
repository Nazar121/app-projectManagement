import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators, FormControlName, FormGroupName } from '@angular/forms';

// services
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  // registration
  formGroup: FormGroup;

  // for show || hide password
  hidePassword: boolean;

  constructor(
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.hidePassword = true;

    this.formGroup = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, this.passwordLength])
    });

  }

  // User registration
  registration() {
    console.log(this.formGroup);
    const user = this.formGroup.value;
    user.name = this.firstLetterUp(user.name);
    user.surname = this.firstLetterUp(user.surname);
    console.log('USER ', user);
    
    this.authService.registration(user);
  }

  // First latter to UP
  firstLetterUp(string: string) {
    if (string.length === 0) { return 'User'; }
    const arr = string.split('');
    const first = arr[0].toUpperCase();
    arr[0] = first;
    return arr.join('');
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

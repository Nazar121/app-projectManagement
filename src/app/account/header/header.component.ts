import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// services
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<any>();

  // USER
  user: any;

  constructor(
    public router: Router,
    public authService: AuthService
  ) { }

  ngOnInit() {
    // GET user data
    this.authService.getUserData().subscribe(res => {
      console.log('USER ', res);
      this.user = res;
    });
  }

  // LOGOUT user
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}

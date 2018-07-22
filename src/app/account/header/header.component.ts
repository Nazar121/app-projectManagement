import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

// services
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<any>();

  constructor(
    public router: Router,
    public authService: AuthService
  ) { }

  ngOnInit() {}

  // LOGOUT user
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}

import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  // settings
  matDrawer: any = {
    mode: 'side'
  };

  constructor() { }

  ngOnInit() {}

  // window resize
  @HostListener('window:resize', ['$event'])
    onResize(event) {
    if ( +window.innerWidth < 768 ) {
      this.matDrawer.mode = 'over';
    } else {
      this.matDrawer.mode = 'side';
    }
  }

  // toggle sidenav
  toggleSidenav(event) {}

}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// firebase
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public router: Router,
    public db: AngularFireDatabase
  ) { }

  // registration
  registration(user) {
    this.db.list('/users').push(user);
  }

  // GET all users
  getUsers() {
    return this.db.object('/users').valueChanges();
  }

  // GET user data
  getUserData() {
    let userId;
    this.getUserId().subscribe(res => {
      userId = res;
    });
    return this.db.object(`/users/${userId}`).valueChanges();
  }

  // LOGIN userId to LocalStorage or SessionStorage
  login(user) {
    if (user.remember === true) {
      localStorage.setItem('userId', JSON.stringify(user.id));
    } else {
      sessionStorage.setItem('userId', JSON.stringify(user.id));
    }
  }

  // LOGOUT userId with LocalStorage or SessionStorage
  logout() {
    localStorage.removeItem('userId');
    sessionStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }

  // GET userId with LocalStorage or SessionStorage
  getUserId() {
    let userId;
    userId = JSON.parse(localStorage.getItem('userId'));
    if (!userId) {
      userId = JSON.parse(sessionStorage.getItem('userId'));
    }

    return Observable.of(userId);
  }

}

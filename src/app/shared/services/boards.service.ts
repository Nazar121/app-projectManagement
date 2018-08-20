import { Injectable } from '@angular/core';

// firebase
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

// services
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  constructor(
    public db: AngularFireDatabase,
    public authService: AuthService
  ) { }

  // CREATE new board
  createBoard(board) {
    this.db.list('/boards').push(board);
  }

  // EDIT board
  editBoard(board) {
    this.db.object(`/boards/${board.boardId}`).update(board);
  }

  // DELETE board
  deleteBoard(boardId) {
    console.log(boardId);
    this.db.object(`/boards/${boardId}`).remove();
  }

  // GET board for user
  getUserBoards() {
    return this.db.object('/boards').valueChanges();
  }

  // GET current board for user
  getCurrentBoard(boardId) {
    return this.db.object(`/boards/${boardId}`).valueChanges();
  }

}

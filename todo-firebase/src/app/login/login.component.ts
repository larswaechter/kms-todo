import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, public auth: AngularFireAuth) {
    this.auth.user.subscribe(user => {
      if (user) {
        this.activeModal.close();
      }
    });
  }

  ngOnInit(): void {
  }

  loginWithGoogle(): void {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginWithPassword(email: string, password: string): void {
    this.auth.signInWithEmailAndPassword(email, password);
  }

  register(email: string, password: string): void {
    this.auth.createUserWithEmailAndPassword(email, password);
  }
}

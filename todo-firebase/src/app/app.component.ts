import { Component } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from './login/login.component';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo-Liste';

  constructor(private modalService: NgbModal, public auth: AngularFireAuth) {
  }

  openLogin(): void {
    this.modalService.open(LoginComponent);
  }

  logout(): void {
    this.auth.signOut();
  }
}

// test hound

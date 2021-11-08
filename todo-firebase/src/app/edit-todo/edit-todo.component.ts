import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  public title = '';

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  edit(): void {
    if (this.title.length > 0) {
      this.activeModal.close(this.title);
    }
  }

}

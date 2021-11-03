import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  public title = '';

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  save(): void {
    if (this.title.length > 0) {
      this.activeModal.close(this.title);
    }
  }

}

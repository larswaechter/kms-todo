import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDoEntry} from '../ToDoEntry';
import {DataService} from "../data.service";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: ToDoEntry;
  @Output() done: EventEmitter<void> = new EventEmitter<void>();
  @Output() delete: EventEmitter<void> = new EventEmitter<void>();

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

}

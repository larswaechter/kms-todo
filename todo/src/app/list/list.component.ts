import { Component, OnInit } from '@angular/core';
import {ToDoEntry} from '../ToDoEntry';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddTodoComponent} from '../add-todo/add-todo.component';
import {DataService} from '../data.service';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  constructor(public dataService: DataService) {

  }

  ngOnInit(): void {
  }
}

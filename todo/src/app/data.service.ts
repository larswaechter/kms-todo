import { Injectable } from '@angular/core';
import {ToDoEntry} from './ToDoEntry';
import {AddTodoComponent} from './add-todo/add-todo.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import firebase from 'firebase';
import User = firebase.User;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private todoCollection: AngularFirestoreCollection<ToDoEntry>;
  todos: Observable<ToDoEntry[]>;
  doneTodos: Observable<ToDoEntry[]>;
  user: User | null = null;

  constructor(private modalService: NgbModal, private http: HttpClient, private afs: AngularFirestore, private auth: AngularFireAuth) {
    this.auth.user.subscribe(user => {
      if (user) {
        this.user = user;
        this.todoCollection = afs.collection<ToDoEntry>(`users/${user.uid}/todos`);
        this.todos = this.todoCollection.valueChanges({idField: 'id'});
      }
    });
  }

  async add(): Promise<void> {
    if (this.user) {
      const modal = this.modalService.open(AddTodoComponent);
      try {
        const title = await modal.result;
        const res = await this.todoCollection.add({title, done: false, date: new Date().toISOString()});
        console.log(res);
      } catch (e) {
        console.log('Window closed', e);
      }
    }
  }

  async markDone(id: string): Promise<void> {
    await this.todoCollection.doc(id).update({done: true});
  }

  async markUndone(id: string): Promise<void> {
    await this.todoCollection.doc(id).update({done: false});
  }

  async delete(id: string): Promise<void> {
    await this.todoCollection.doc(id).delete();
  }
}

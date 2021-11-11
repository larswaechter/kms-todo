import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AddTodoComponent } from './add-todo.component';

describe('AddTodoComponent', () => {
  let component: AddTodoComponent;
  let fixture: ComponentFixture<AddTodoComponent>;
  let service: NgbModal;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [NgbModal, NgbActiveModal],
      declarations: [AddTodoComponent],
    }).compileComponents();
    service = TestBed.inject(NgbModal);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add new todo', () => {
    const ref = service.open(AddTodoComponent);

    ref.result.then((res) => {
      expect(res).toBe('Mein neues Todo');
    });

    ref.componentInstance.title = 'Mein neues Todo';
    ref.componentInstance.save();
  });

  /*
  it('should not add empty todo', () => {
    const ref = service.open(AddTodoComponent);

    const cb = () => {};
    ref.result.then(cb);

    expect(cb).toHaveBeenCalledTimes(0);

    ref.componentInstance.title = '';
    ref.componentInstance.save();
  });
  */
});

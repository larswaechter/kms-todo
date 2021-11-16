import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTodoComponent } from './edit-todo.component';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

describe('EditTodoComponent', () => {
  let component: EditTodoComponent;
  let fixture: ComponentFixture<EditTodoComponent>;
  let service: NgbModal;
  let title= 'EditTodoComponet';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTodoComponent ],
      providers: [NgbModal, NgbActiveModal]
    })
    .compileComponents();
    service = TestBed.inject(NgbModal);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('', () => {
    expect(component.title).toBe('');
  });

  it('should edit a todo', () => {
    const ref = service.open(EditTodoComponent);

    ref.result.then((res) => {
      expect(res).toBe('Mein updated Todo');
    });

    ref.componentInstance.title = 'Mein updated Todo';
    ref.componentInstance.edit();
  });

  it('checks if title is not EditTodoComponent', () => {
    expect(component.title).not.toBe(title);
  });
});

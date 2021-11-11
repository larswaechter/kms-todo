import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ToDoEntry} from './ToDoEntry';

describe('ToDoEntry', () => {
  const todoTest: ToDoEntry = new  ToDoEntry('test');

  it('should create a new ToDo', () => {
    expect(todoTest).toBeTruthy();
  });

  it(`title should be "test"`, () => {
   expect(todoTest.title).toBe('test');
  });

  it('should show date', () => {
    expect(todoTest.date).toBeTruthy('');
  });

  it('done should be false', () => {
    expect(todoTest.done).toBe(false);
  });

  it('rating should be 1', () => {
    expect(todoTest.rating).toBe(1);
  });
});

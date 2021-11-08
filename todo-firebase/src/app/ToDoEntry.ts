export class ToDoEntry {
  id?: string;
  title: string;
  done: boolean;
  date: string;

  constructor(title: string) {
    this.title = title;
    this.date = new Date().toISOString();
    this.done = false;
  }
}

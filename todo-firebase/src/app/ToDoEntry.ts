export class ToDoEntry {
  id?: string;
  title: string;
  done: boolean;
  date: string;
  rating: number;

  constructor(title: string) {
    this.title = title;
    this.date = new Date().toISOString();
    this.done = false;
    this.rating = 1;
  }
}

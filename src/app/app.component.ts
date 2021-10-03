import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from './shared/interfaces/todo.interface';
import {
  addTodoAction,
  deleteTodoAction,
  fetchTodosAction,
  toggleTodoAction,
} from './shared/store/todos.actions';
import { selectTodosData } from './shared/store/todos.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public todos$: Observable<Todo[]> = this.store.select(selectTodosData);
  public message!: string;

  ngOnInit() {
    this.store.dispatch(fetchTodosAction());
  }

  constructor(private store: Store) {}

  public addTodo() {
    this.store.dispatch(
      addTodoAction({ todo: { message: this.message, done: false } })
    );
  }

  public toggleTodo(index: number) {
    this.store.dispatch(toggleTodoAction({ index }));
  }

  public deleteTodo(index: number) {
    this.store.dispatch(deleteTodoAction({ index }));
  }
}

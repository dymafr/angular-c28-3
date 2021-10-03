import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Todo } from '../interfaces/todo.interface';
import { TodosService } from '../services/todos.service';
import {
  fetchTodosAction,
  fetchTodosSuccessAction,
  errorTodoAction,
} from './todos.actions';

@Injectable()
export class TodoEffects {
  fetchTodosEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchTodosAction),
      switchMap(() =>
        this.todosService.fetchTodos().pipe(
          map((todos: Todo[]) => fetchTodosSuccessAction({ todos })),
          catchError((error) => of(errorTodoAction({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private todosService: TodosService) {}
}

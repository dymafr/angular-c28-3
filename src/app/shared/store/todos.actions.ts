import { createAction, props } from '@ngrx/store';
import { Todo } from '../interfaces/todo.interface';

export const fetchTodosAction = createAction('[ todos ] fetch todos');
export const fetchTodosSuccessAction = createAction(
  '[ todos ] fetch todos success',
  props<{ todos: Todo[] }>()
);

export const errorTodoAction = createAction(
  '[ todos ] error todos',
  props<{ error: any }>()
);

export const addTodoAction = createAction(
  '[ todos ] add todo',
  props<{ todo: Todo }>()
);
export const deleteTodoAction = createAction(
  '[ todos ] delete todo',
  props<{ index: number }>()
);
export const toggleTodoAction = createAction(
  '[ todos ] toggle todo',
  props<{ index: number }>()
);

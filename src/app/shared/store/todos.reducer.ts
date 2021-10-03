import { createReducer, on } from '@ngrx/store';
import { Todo } from '../interfaces/todo.interface';
import * as TodosActions from './todos.actions';

export interface TodosState {
  data: Todo[];
  error: any;
}

export const TODOS_INITIAL_STATE = {
  data: [],
  error: null,
};

export const todoFeatureKey = 'todos';

export const todosReducer = createReducer(
  TODOS_INITIAL_STATE,
  on(
    TodosActions.fetchTodosSuccessAction,
    (state: TodosState, { todos }: { todos: Todo[] }): TodosState => {
      return {
        ...state,
        data: [...todos],
      };
    }
  ),
  on(
    TodosActions.errorTodoAction,
    (state: TodosState, { error }: { error: any }): TodosState => {
      return {
        ...state,
        error,
      };
    }
  ),
  on(
    TodosActions.addTodoAction,
    (state: TodosState, { todo }: { todo: Todo }): TodosState => {
      return {
        ...state,
        data: [...state.data, todo],
      };
    }
  ),
  on(
    TodosActions.deleteTodoAction,
    (state: TodosState, { index }: { index: number }): TodosState => {
      return {
        ...state,
        data: state.data.filter((v, i) => i !== index),
      };
    }
  ),
  on(
    TodosActions.toggleTodoAction,
    (state: TodosState, { index }: { index: number }): TodosState => {
      return {
        ...state,
        data: state.data.map((v, i) =>
          i !== index ? v : { ...v, done: !v.done }
        ),
      };
    }
  )
);

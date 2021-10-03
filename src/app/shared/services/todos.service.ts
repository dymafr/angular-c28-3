import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}

  public fetchTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://restapi.fr/api/ngrxtodos');
  }
}

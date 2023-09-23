import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { map, catchError, first } from 'rxjs/operators';
import { Todo } from './Todo';


@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private baseUrl = 'http://localhost:8000/api';

  private _todos = new BehaviorSubject<Todo[]>([]);
  private dataStore: { todos: Todo[] } = { todos: [] };
  readonly todos = this._todos.asObservable();

  constructor(private http: HttpClient) {}

  loadAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/todos`)
    .pipe(
      map((data) => {
        this.dataStore.todos = JSON.parse(JSON.stringify(data));
        this._todos.next(Object.assign({}, this.dataStore).todos);
        return Object.assign({}, this.dataStore).todos;
      }),
      catchError((error) => this.throwError(error))
    );
  }

  load(id: number | string) {
    return this.http.get<Todo>(`${this.baseUrl}/todos/${id}`).pipe(
      map((data) => {
        let notFound = true;

        this.dataStore.todos.forEach((item, index) => {
          if (item._id === data._id) {
            this.dataStore.todos[index] = data;
            notFound = false;
          }
        });

        if (notFound) {
          this.dataStore.todos.push(data);
        }
        //copy
        this._todos.next(Object.assign({}, this.dataStore).todos);
        return Object.assign({}, data);
      }),
      catchError((error) => this.throwError(error))
    );
  }

  save(todo: Todo) {
    return this.http
      .post<Todo>(`${this.baseUrl}/todos`, todo)
    .pipe(
      map((data) => {
        this.dataStore.todos.push(data);
        this._todos.next(Object.assign({}, this.dataStore).todos);
      }),
      catchError((error) => this.throwError(error))
    );

  }

  update(id: Number | String, todo: Todo) {
    return this.http
      .put<Todo>(`${this.baseUrl}/todos/${id}`, todo)
      .pipe(
        map((data) => {
          this.dataStore.todos.forEach((t, i) => {
            if (t._id === data._id) {
              this.dataStore.todos[i] = data;
            }
          });

          this._todos.next(Object.assign({}, this.dataStore).todos);
        }),
        catchError((error) => this.throwError(error))
      );
  }

  remove(todoId: number | string) {
    return this.http.delete(`${this.baseUrl}/todos/${todoId}`)
      .pipe(
        map((response) => {
          this.dataStore.todos.forEach((t, i) => {
            if (t._id === todoId) {
              this.dataStore.todos.splice(i, 1);
            }
          });
  
          this._todos.next(Object.assign({}, this.dataStore).todos);
          
          return Object.assign({}, this.dataStore).todos;
        }),
        catchError((error) => this.throwError(error))
      );
  }

  throwError(error: any): any {
    throw error.json().error || 'Server error';
    // return Observable.throw(error.json().error || 'Server error');
  }
}

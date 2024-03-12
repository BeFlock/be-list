import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.model';
import { apiEndpoint } from '../constants/constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IResponse } from '../models/default.mode';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: ITodo[] = [{
    id: 1,
    title: 'title',
    description: 'description',
    status: 'OPEN',
  }];

  constructor(private http: HttpClient) {}

  getAllTodo(status: string): Observable<IResponse<ITodo[]>> {
    let queryString = '';
    if (status !== '') {
      queryString = `status=${status}`;
    }
    return this.http.get<IResponse<ITodo[]>>(
      `${apiEndpoint.TodoEndpoint.getAllTodo}?${queryString}`
    );
  }

  addTodo(data: ITodo): Observable<IResponse<ITodo>> {
    return this.http.post<IResponse<ITodo>>(
      `${apiEndpoint.TodoEndpoint.addTodo}`,
      data
    );
  }

  updateTodo(id: number, data: ITodo): Observable<IResponse<ITodo>> {
    return this.http.put<IResponse<ITodo>>(
      `${apiEndpoint.TodoEndpoint.updateTodo}/${id}`,
      data
    );
  }
}

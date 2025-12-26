import { inject, Injectable } from '@angular/core';
import {Todo} from '../interfaces/todo'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodosS {
  http = inject(HttpClient);

  getTodosFromApi() {
    const url = "https://jsonplaceholder.typicode.com/todos"
    return this.http.get<Array<Todo>>(url);
  }
}

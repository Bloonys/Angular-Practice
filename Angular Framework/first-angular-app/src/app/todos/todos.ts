import { Component, inject, OnInit, signal } from '@angular/core';
import {TodosS} from '../services/todos'
import {Todo} from '../interfaces/todo'
import { catchError } from 'rxjs';
import { TodoItem } from '../component/todo-item/todo-item';

@Component({
  selector: 'app-todos',
  standalone: false,
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos implements OnInit{
  todoService = inject(TodosS);
  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
    this.todoService.getTodosFromApi()
      .pipe(
        catchError((err) => { // api call
          console.error(err);
          throw err;
        })
      )
      .subscribe((todos) => { 
        this.todoItems.set(todos);
      }); 
  }

  //重点记忆
  updateTodoItem(todoItem: Todo) {
  this.todoItems.update((todos) => {
    return todos.map((todo) => { 
      if (todo.id === todoItem.id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }); 
  }); 
}

}

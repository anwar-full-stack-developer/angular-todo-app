import { Component, OnInit } from '@angular/core';
import { first, map } from 'rxjs/operators';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent   implements OnInit {
  todos?: any = [];
  singleTodo$?: any = {};

  constructor(private todoService: TodoService) {
    // this.todos = this.todoService.todos;
  }

  ngOnInit() {
    // this.todos = this.todoService.todos; // subscribe to entire collection

      this.todoService.loadAll()
          .pipe(first())
          .subscribe(todos => this.todos = todos);
  }

  deleteTodo(id: string) {
      const todo = this.todos!.find((x:any) => x._id === id);
      todo.isDeleting = true;
      this.todoService.remove(id)
          .pipe(first())
          .subscribe(() => this.todos = this.todos!.filter((x:any) => x._id !== id));
  }
}

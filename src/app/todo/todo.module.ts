import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule,
  ReactiveFormsModule } from '@angular/forms';

import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    TodoListComponent,
    AddTodoComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    TodoRoutingModule
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';


const routes: Routes = [
  { path: 'list',  component: TodoListComponent, data: { animation: 'todos' } },
  { path: 'add-new',  component: AddTodoComponent, data: { animation: 'todos' } },
  { path: 'edit/:id',  component: AddTodoComponent, data: { animation: 'todos' } },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TodoRoutingModule { }

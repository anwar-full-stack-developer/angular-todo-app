import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddEditComponent } from './employee-add-edit/employee-add-edit.component';

const routes: Routes = [
  { path: 'list',  component: EmployeeListComponent, data: { animation: 'employee' } },
  { path: 'add',  component: EmployeeAddEditComponent, data: { animation: 'employee' } },
  { path: 'edit/:id',  component: EmployeeAddEditComponent, data: { animation: 'employee' } },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class EmployeeRoutingModule { }

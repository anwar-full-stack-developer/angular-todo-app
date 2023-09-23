import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { EmployeeAddEditComponent } from './employee-add-edit/employee-add-edit.component';



@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeAddEditComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    EmployeeRoutingModule
  ],
  providers:[
    EmployeeService
  ]
})
export class EmployeeModule { }

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent   implements OnInit {
  employees?: any = [];
  singleTodo$?: any = {};

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
      this.employeeService.getEmployees()
          .pipe(first())
          .subscribe(employees => this.employees = employees);
  }

  deleteEmployee(id: string) {
      const employee = this.employees!.find((x:any) => x._id === id);
      employee.isDeleting = true;
      this.employeeService.deleteEmployee(id)
          .pipe(first())
          .subscribe(() => this.employees = this.employees!.filter((x:any) => x._id !== id));
  }
}
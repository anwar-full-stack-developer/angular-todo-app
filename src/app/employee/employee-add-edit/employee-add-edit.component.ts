import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/components/alert/alert.service';
import { EmployeeService } from '../employee.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-employee-add-edit',
  templateUrl: './employee-add-edit.component.html',
  styleUrls: ['./employee-add-edit.component.css']
})
export class EmployeeAddEditComponent  implements OnInit {
  form!: FormGroup;
  id?: string;
  title!: string;
  loading = false;
  submitting = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private employeeService: EmployeeService,
      private alertService: AlertService
  ) { }

  ngOnInit() {
      this.id = this.route.snapshot.params["id"];

      // form with validation rules
      this.form = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          address: ['', [Validators.required]],
          state: ['', [Validators.required]],
          zipcode: ['', [Validators.required]],
          country: ['', [Validators.required]],
      });

      this.title = 'Add Employee';
      if (this.id) {
          // edit mode
          this.title = 'Edit Employee';
          this.loading = true;
          this.employeeService.getEmployee(this.id)
              .pipe(first())
              .subscribe((x : any) => {
                  this.form.patchValue(x);
                  console.log(x)
                  this.loading = false;
              });
      }
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }

      this.submitting = true;
      this.saveEmployee()
          .pipe(first())
          .subscribe({
              next: () => {
                  this.alertService.success('Employee saved', true);
                  this.router.navigateByUrl('/employee/list');
              },
              error: (error: any) => {
                  this.alertService.error(error);
                  this.submitting = false;
              }
          })
  }

  private saveEmployee() {
      return this.id
          ? this.employeeService.updateEmployee(this.id!, this.form.value)
          : this.employeeService.createEmployee(this.form.value);
  }
}


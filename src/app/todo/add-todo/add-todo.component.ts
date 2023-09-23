import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { TodoService } from '../todo.service';
import { AlertService } from 'src/app/components/alert/alert.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
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
      private todoService: TodoService,
      private alertService: AlertService
  ) { }

  ngOnInit() {
      this.id = this.route.snapshot.params["id"];

      // form with validation rules
      this.form = this.formBuilder.group({
          task: ['', Validators.required],
          details: ['', Validators.required],
          status: ['', [Validators.required]],
      });

      this.title = 'Add Todo';
      if (this.id) {
          // edit mode
          this.title = 'Edit Todo';
          this.loading = true;
          this.todoService.load(this.id)
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
      this.saveTodo()
          .pipe(first())
          .subscribe({
              next: () => {
                  this.alertService.success('Todo saved', true);
                  this.router.navigateByUrl('/todo/list');
              },
              error: (error: any) => {
                  this.alertService.error(error);
                  this.submitting = false;
              }
          })
  }

  private saveTodo() {
      return this.id
          ? this.todoService.update(this.id!, this.form.value)
          : this.todoService.save(this.form.value);
  }
}

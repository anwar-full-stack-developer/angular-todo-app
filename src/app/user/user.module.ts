import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule,
  ReactiveFormsModule } from '@angular/forms';

import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserRoutingModule } from './user-routing.module';
import { EditUserComponent } from './edit-user/edit-user.component';



@NgModule({
  declarations: [
    UserListComponent,
    AddUserComponent,
    EditUserComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    CommonModule,
  ]
})
export class UserModule { }

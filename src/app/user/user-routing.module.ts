import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { authGuard } from '../auth/auth.guard';

const userRoutes: Routes = [

  // { path: 'user/edit/:id', component: EditUserComponent , canMatch: [authGuard]},
  // { path: 'user/add', component: EditUserComponent, canMatch: [authGuard] },
  // { path: 'user/list', component: UserListComponent, canMatch: [authGuard] },

  { path: 'list', component: UserListComponent, canMatch: [authGuard] },
  { path: 'add', component: EditUserComponent, canMatch: [authGuard] },
  { path: 'edit/:id', component: EditUserComponent , canMatch: [authGuard]},

//   { 
//     path: 'edit/:id', 
//     component: EditUserComponent , 
//     canMatch: [authGuard]
// },
//   { path: 'add', component: EditUserComponent, 
//   // canMatch: [authGuard] 
// },
//   { path: 'list', component: UserListComponent, 
//   // canMatch: [authGuard] 
// },


];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

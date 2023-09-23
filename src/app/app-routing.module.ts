import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  // { path: '',   redirectTo: '/superheroes', pathMatch: 'full' },

  // { path: 'users', loadChildren: usersModule, canMatch: [authGuard] },

  

  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    data: { preload: true }
  },
  {
    path: 'myaccount',
    loadChildren: () => import('./myaccount/myaccount.module').then(m => m.MyaccountModule),
    // data: { preload: true }
  },
  {
    path: 'crisis-center',
    loadChildren: () => import('./crisis-center/crisis-center.module').then(m => m.CrisisCenterModule),
    data: { preload: true }
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),
    data: { preload: true }
  },

  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canMatch: [authGuard]
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    data: { preload: true }
  },

  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule),
    // data: { preload: true }
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
    // data: { preload: true }
  },

  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false, // <-- debugging purposes only
      // preloadingStrategy: SelectivePreloadingStrategyService,
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

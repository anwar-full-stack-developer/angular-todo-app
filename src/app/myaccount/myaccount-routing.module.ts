import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { MyaccountComponent } from './myaccount.component';
import { authGuard } from '../auth/auth.guard';
import { MyaccountDashboardComponent } from './myaccount-dashboard/myaccount-dashboard.component';


const heroesRoutes: Routes = [
  { 
    path: '',  
    component: MyaccountComponent, 
    canActivate: [authGuard], 
  // canMatch: [authGuard], 
    data: { animation: 'myaccount' },
    children: [
      // {
      //     path: 'user',
      //     outlet: "myaccount-router-outlet",
      //     loadChildren: () => import('./../user/user.module').then(m => m.UserModule),
      //        data: { preload: true },
      //     canActivateChild: [authGuard],
      //   }
      // {
      //   path: '',
      //   canActivateChild: [authGuard],
      //   children: [
      //     { path: '', 
      //       component: MyaccountDashboardComponent
      //     }
      //   ]
      // }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(heroesRoutes),
    RouterOutlet,
  ],
  exports: [
    RouterModule,
    RouterOutlet
  ]
})
export class MyaccountRoutingModule { }

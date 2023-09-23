import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyaccountRoutingModule } from './myaccount-routing.module';
import { MyaccountDashboardComponent } from './myaccount-dashboard/myaccount-dashboard.component';
import { RouterModule } from '@angular/router';
import { MyaccountTopNavComponent } from './myaccount-top-nav/myaccount-top-nav.component';



@NgModule({
  declarations: [
    MyaccountTopNavComponent,
    MyaccountDashboardComponent,
    MyaccountTopNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MyaccountRoutingModule
  ]
})
export class MyaccountModule { }

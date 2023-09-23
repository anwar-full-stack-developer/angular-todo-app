import { Component, OnInit, isDevMode } from '@angular/core';
import { AccountService } from './auth/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-todo-app';
  userIsLoggedin = false;
  constructor(private accountService: AccountService) {}
  ngOnInit() {
    this.userIsLoggedin = this.accountService.userIsLoggedin;
    if (isDevMode()) {
      // 👈🏻👈🏻👈🏻
      console.log('Development On!');
    } else {
      console.log('Production On!');
    }
  }
}

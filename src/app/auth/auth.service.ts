import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  constructor(
    private accountService: AccountService
) {
  this.isLoggedIn = accountService.userIsLoggedin;
}

  // login(): Observable<boolean> {
  //   return of(true).pipe(
  //     delay(1000),
  //     tap(() => this.isLoggedIn = true)
  //   );
  // }

  // logout(): void {
  //   this.isLoggedIn = false;
  // }
}

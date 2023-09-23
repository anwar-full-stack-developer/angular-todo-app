import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from './User';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private router: Router,
    private http: HttpClient,
    private accountService: AccountService
  ) {}

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  getById(id: string) {
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  }
  save(user: User) {
    return this.http.post(`${environment.apiUrl}/users`, user);
  }

  update(id: string, params: any) {
    return this.http.put(`${environment.apiUrl}/users/${id}`, params).pipe(
      map((x) => {
        // update stored user if the logged in user updated their own record
        if (id == this.accountService.userValue?.id) {
          // update local storage
          const user = { ...this.accountService.userValue, ...params };
          this.accountService.doLogin(user);

          // localStorage.setItem('user', JSON.stringify(user));
          // // publish updated user to subscribers
          // this.accountService.userSubject.next(user);
        }
        return x;
      })
    );
  }

  delete(id: string) {
    return this.http.delete(`${environment.apiUrl}/users/${id}`).pipe(
      map((x) => {
        // auto logout if the logged in user deleted their own record
        if (id == this.accountService.userValue?.id) {
          this.accountService.logout();
        }
        return x;
      })
    );
  }
}

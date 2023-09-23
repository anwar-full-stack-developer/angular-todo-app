import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AccountService } from './.././../auth/account.service';
import { UserService } from './../../auth/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent  implements OnInit {
  users?: any[];

  constructor(private userService: UserService) {}

  ngOnInit() {
      this.userService.getAll()
          .pipe(first())
          .subscribe(users => this.users = users);
  }

  deleteUser(id: string) {
      const user = this.users!.find(x => x._id === id);
      // user.isDeleting = true;
      this.userService.delete(id)
          .pipe(first())
          .subscribe(() => this.users = this.users!.filter(x => x._id !== id));
  }
}

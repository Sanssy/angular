import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { StateUser } from 'src/app/shared/enums/state-user.enum';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-page-list-users',
  templateUrl: './page-list-users.component.html',
  styleUrls: ['./page-list-users.component.scss']
})
export class PageListUsersComponent implements OnInit {

  public headers: string[];
  public users: User[];
  public roles = Object.values(StateUser);
  public btnRoute: BtnI;
  public btnHref: BtnI;
  public usersObservable: Observable<User[]>;

  constructor(private userService: UserService ) { }

  ngOnInit(): void {
    this.headers = ['Id', 'Username', 'Role'];
    this.initButtons();
    this.usersObservable = this.userService.getUsersByRole(localStorage.role);
    // this.userService.fetchUsers.subscribe(userList => this.users = userList)
  }

  public isAdmin(): boolean {
    return localStorage.role === StateUser.ADMIN;
  }

  public checkUserRole(): boolean {
    if (this.isAdmin()) {
      return false;
    } else {
      return true;
    }

    // return role === StateUser.USER;
  }

  public initButtons() {
    this.btnRoute = { label: 'Add User', route: 'add' };
    this.btnHref = { label: 'Go to Angular', href: 'http://www.angular.io' };
  }

  public changeRole(user: User, event): void {
    this.userService.changeRole(user, event.target.value).subscribe(data => user.role = data.role)
  }
}

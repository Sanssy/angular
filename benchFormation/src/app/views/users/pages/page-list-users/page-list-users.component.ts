import { Component, OnInit } from '@angular/core';
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

  constructor(private userService: UserService ) { }

  ngOnInit(): void {
    this.headers = ['Id', 'Username', 'Role'];
    this.initButtons();
    this.userService.fetchUsers.subscribe(userList => this.users = userList)
  }

  public initButtons() {
    this.btnRoute = { label: 'Add User', route: 'add' };
    this.btnHref = { label: 'Go to Angular', href: 'http://www.angular.io' };
  }

  public changeRole(user: User, event): void {
    this.userService.changeRole(user, event.target.value).subscribe(data => user.role = data.role)
  }

}

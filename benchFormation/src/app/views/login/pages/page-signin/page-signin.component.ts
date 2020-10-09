import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { StateUser } from 'src/app/shared/enums/state-user.enum';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-page-signin',
  templateUrl: './page-signin.component.html',
  styleUrls: ['./page-signin.component.scss']
})
export class PageSigninComponent implements OnInit {

  public btnSignInUser: BtnI;
  public btnSignInAdmin: BtnI;
  public btnSignOut: BtnI;
  public user: Observable<User>;
  public usr: User;
  public admin: User;
  users: User[];

  constructor(private router: Router, private userservice: UserService) { }

  ngOnInit(): void {
    this.userservice.fetchUsers.subscribe(users => {
      this.admin = users.find(u => u.role === StateUser.ADMIN);
      this.usr = users.find(u => u.role === StateUser.USER);
    })
    this.initButtons();
  }

  // onSignIn(): void {
  //   localStorage.userConnected = true;
  //   this.router.navigate(['/home']);
  // }

  // onSignOut(): void {
  //   localStorage.userConnected = false;
  // }

  public initButtons(): void {
    this.btnSignInUser = { label: 'User SignIn', action: true };
    this.btnSignInAdmin = { label: 'Admin SignIn', action: true };
    this.btnSignOut = { label: 'SignOut', action: true };
  }

  signIn(username: string, password: string){
    this.userservice.getByUsernameAndPassword(username, password).subscribe(obj => {
      localStorage.username = obj[0].username;
      localStorage.role = obj[0].role;
      localStorage.id = obj[0].id;
      localStorage.userConnected = true;
      this.router.navigate(['/home']);
    });
  }

  signOut() {
    if (localStorage.userConnected){
      localStorage.userConnected = false;
      localStorage.username = '';
      localStorage.role = '';
    }
  }
}

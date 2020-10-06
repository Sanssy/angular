import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/core/services/control.service';
import { User } from 'src/app/core/services/users/user';

@Component({
  selector: 'app-page-signin',
  templateUrl: './page-signin.component.html',
  styleUrls: ['./page-signin.component.scss']
})
export class PageSigninComponent implements OnInit {

  users: User[];

  constructor(private userservice: ControlService) { }

  ngOnInit(): void {
    this.userservice.fetchUsers.subscribe(users => {
      console.log(users);
    })

  }

  onSignIn(): void {
    localStorage.userConnected = true;
  }

  onSignOut(): void {
    localStorage.userConnected = false;
  }

}

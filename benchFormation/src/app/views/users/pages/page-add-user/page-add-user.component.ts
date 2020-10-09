import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user';
import { Location } from '@angular/common';
import { StateUser } from 'src/app/shared/enums/state-user.enum';

@Component({
  selector: 'app-page-add-user',
  templateUrl: './page-add-user.component.html',
  styleUrls: ['./page-add-user.component.scss']
})
export class PageAddUserComponent implements OnInit {

  public authorized: boolean;

  constructor(
    public route: ActivatedRoute,
    public userService: UserService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.authorized = this.displayFormsControl();
  }

  public add(user: User): void {
    this.userService.add(user).subscribe(() => this.location.back());
  }

  public displayFormsControl(): boolean {
    return localStorage.role === StateUser.ADMIN;
  }
}

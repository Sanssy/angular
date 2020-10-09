import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user';
import { Location } from '@angular/common';
import { StateUser } from 'src/app/shared/enums/state-user.enum';
import { BtnI } from 'src/app/shared/interfaces/btn-i';

@Component({
  selector: 'app-page-add-user',
  templateUrl: './page-add-user.component.html',
  styleUrls: ['./page-add-user.component.scss']
})
export class PageAddUserComponent implements OnInit {

  public authorized: boolean;
  public btnAction: BtnI;

  constructor(
    public route: ActivatedRoute,
    public userService: UserService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.authorized = this.displayFormsControl();
    this.initButton();
  }

  public add(user: User): void {
    this.userService.add(user).subscribe(() => this.location.back());
  }

  public displayFormsControl(): boolean {
    return localStorage.role === StateUser.ADMIN;
  }

  public initButton(): void {
    this.btnAction = {label: 'Return', action: true}
  }

  onReturn(){
    this.location.back();
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from './users/user';

@Injectable({
  providedIn: 'root'
})
export class ControlService implements CanActivate {

  private pUsers: Observable<User[]>;
  private urlApi = environment.urlApi;

  constructor(
    private router: Router,
    private http: HttpClient
    ) {
      this.fetchUsers = this.http.get<User[]>(`${this.urlApi}users`).pipe(
        map(users => users.map(user => new User(user)))
      )
    }

  public canActivate(): boolean {
    if (localStorage.userConnected === 'true'){
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }

  public get fetchUsers(): Observable<User[]> {
    return this.pUsers;
  }

  public set fetchUsers(users: Observable<User[]>){
    this.pUsers = users;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private pUsers: Observable<User[]>;
  private urlApi = environment.urlApi;

  constructor(
    private http: HttpClient
    ) {

    this.fetchUsers = this.http.get<User[]>(`${this.urlApi}users`).pipe(
      map(users => users.map(user => new User(user)))
    )

   }

  public get fetchUsers(): Observable<User[]> {
    return this.pUsers;
  }

  public set fetchUsers(users: Observable<User[]>){
    this.pUsers = users;
  }

  // User : get username & password
  public getByUsernameAndPassword(username: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.urlApi}users?username=${username}&passeword=${password}`)
  }

}

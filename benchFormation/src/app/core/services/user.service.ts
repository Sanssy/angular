import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateUser } from 'src/app/shared/enums/state-user.enum';
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

  public changeRole(user: User, role: StateUser): Observable<User> {
    const obj = new User({...user});
    obj.role = role;
    return this.update(obj)
  }

  public update(user: User) {
    return this.http.put<User>(`${this.urlApi}users/${user.id}`, user);
  }

  // User : get username & password
  public getByUsernameAndPassword(username: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.urlApi}users?username=${username}&password=${password}`).pipe(
      map(obj => new User(obj))
    )
  }

  public getUsersByRole(role: StateUser): Observable<User[]> {
    if (role === StateUser.USER) {
      return this.http.get<User[]>(`${this.urlApi}users?role=${role}`).pipe(
        map(users => users.map(u => new User(u))));
    } else {
      return this.fetchUsers;
    }
  }

  public getById(id: number): Observable<User> {
    return this.http.get<User>(`${this.urlApi}users/${id}`).pipe(map(user => new User(user)))
  }

  public add(user: User): Observable<User> {
    return this.http.post<User>(`${this.urlApi}users`, user);
  }

}

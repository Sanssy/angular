import { UserI } from '../interfaces/user-i';

export class User implements UserI{
  username: string;
  password: string;

  constructor(obj?: Partial<User>){
    if (obj) {
      Object.assign(this, obj)
    }
  }
}

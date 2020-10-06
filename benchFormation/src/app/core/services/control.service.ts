import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ControlService implements CanActivate {

  constructor(
    private router: Router
    ) {  }

  public canActivate(): boolean {
    if (localStorage.userConnected === 'true'){
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}

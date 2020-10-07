import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public open: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.open = true;
  }

  public toggle(): void {
    this.open = !this.open;
  }

  public signout(): void {
    localStorage.userConnected = false;
    this.router.navigate(['/login']);
  }

}

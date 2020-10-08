import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {

  public userConnected: string;

  constructor() { }

  ngOnInit(): void {
    if (!localStorage.userConnected){
      localStorage.userConnected = false;
    }
    this.userConnected = localStorage.username;
  }
}

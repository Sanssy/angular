import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {

  public userConnected: string;
  public message: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userConnected = localStorage.username;
    // this.route.paramMap.subscribe(params => {
    //   console.log(params);
    // });
      this.message =  `Hello ${this.userConnected}`;

    if (!localStorage.userConnected){
      localStorage.userConnected = false;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-signout',
  templateUrl: './icon-signout.component.html',
  styleUrls: ['./icon-signout.component.scss']
})
export class IconSignoutComponent implements OnInit {

  public signout = faPowerOff;

  constructor() { }

  ngOnInit(): void {
  }

}

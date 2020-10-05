import { Component, OnInit } from '@angular/core';
import { faAccessibleIcon } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-icon-accessible',
  templateUrl: './icon-accessible.component.html',
  styleUrls: ['./icon-accessible.component.scss']
})
export class IconAccessibleComponent implements OnInit {

  public accesible = faAccessibleIcon;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-warning',
  templateUrl: './icon-warning.component.html',
  styleUrls: ['./icon-warning.component.scss']
})
export class IconWarningComponent implements OnInit {

  public warning = faExclamationTriangle;

  constructor() { }

  ngOnInit(): void {
  }

}

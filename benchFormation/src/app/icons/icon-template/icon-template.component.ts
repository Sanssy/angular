import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-template',
  templateUrl: './icon-template.component.html',
  styleUrls: ['./icon-template.component.scss']
})
export class IconTemplateComponent implements OnInit {

  @Input() value: string;

  constructor() { }

  ngOnInit(): void {
  }

}

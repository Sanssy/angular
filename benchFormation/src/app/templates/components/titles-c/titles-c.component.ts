import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titles-c',
  templateUrl: './titles-c.component.html',
  styleUrls: ['./titles-c.component.scss']
})
export class TitlesCComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}

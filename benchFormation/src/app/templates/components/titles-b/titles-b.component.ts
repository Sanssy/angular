import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titles-b',
  templateUrl: './titles-b.component.html',
  styleUrls: ['./titles-b.component.scss']
})
export class TitlesBComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}

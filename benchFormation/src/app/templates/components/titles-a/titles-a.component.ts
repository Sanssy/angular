import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titles-a',
  templateUrl: './titles-a.component.html',
  styleUrls: ['./titles-a.component.scss']
})
export class TitlesAComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}

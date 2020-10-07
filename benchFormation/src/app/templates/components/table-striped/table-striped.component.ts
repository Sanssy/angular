import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-striped',
  templateUrl: './table-striped.component.html',
  styleUrls: ['./table-striped.component.scss']
})
export class TableStripedComponent implements OnInit {

  @Input() public headers: string[];

  constructor() { }

  ngOnInit(): void {
  }

}

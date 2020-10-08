import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {

  @Input() label: string;
  @Input() route: string;
  @Input() href: string;
  @Input() icon: boolean;
  @Input() action: boolean
  @Output() clicked: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  public onAction() {
    this.clicked.emit();
  }

}

import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appDaysCount]'
})
export class DaysCountDirective implements OnChanges{

  @Input() appDaysCount: number;
  @HostBinding('class') className: string;

  constructor() { }

  ngOnChanges() {
    this.className = this.formatClass(this.appDaysCount)
  }

  private formatClass(days: number): string {
    return days >= 3 ? 'days' : 'day';
  }
}

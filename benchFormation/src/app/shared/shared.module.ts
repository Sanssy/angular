import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { DaysPipe } from './pipes/days.pipe';
import { ColorStateDirective } from './directives/color-state.directive';
import { DaysCountDirective } from './directives/days-count.directive';


@NgModule({
  declarations: [TotalPipe, DaysPipe, ColorStateDirective, DaysCountDirective],
  imports: [
    CommonModule
  ],
  exports: [
    TotalPipe,
    DaysPipe,
    ColorStateDirective,
    DaysCountDirective
  ]
})
export class SharedModule { }

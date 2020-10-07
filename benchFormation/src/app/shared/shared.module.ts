import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { DaysPipe } from './pipes/days.pipe';
import { ColorStateDirective } from './directives/color-state.directive';


@NgModule({
  declarations: [TotalPipe, DaysPipe, ColorStateDirective],
  imports: [
    CommonModule
  ],
  exports: [
    TotalPipe,
    DaysPipe,
    ColorStateDirective
  ]
})
export class SharedModule { }

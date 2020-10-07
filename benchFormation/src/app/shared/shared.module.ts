import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { DaysPipe } from './pipes/days.pipe';
import { ColorStateDirective } from './directives/color-state.directive';
import { DaysCountDirective } from './directives/days-count.directive';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [TotalPipe, DaysPipe, ColorStateDirective, DaysCountDirective, BtnComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TotalPipe,
    DaysPipe,
    ColorStateDirective,
    DaysCountDirective,
    BtnComponent
  ]
})
export class SharedModule { }

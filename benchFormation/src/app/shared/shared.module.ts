import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { DaysPipe } from './pipes/days.pipe';


@NgModule({
  declarations: [TotalPipe, DaysPipe],
  imports: [
    CommonModule
  ],
  exports: [
    TotalPipe,
    DaysPipe
  ]
})
export class SharedModule { }

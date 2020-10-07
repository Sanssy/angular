import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'days'
})
export class DaysPipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    if (value) {
      if (value > 1)
        return value + ' jours';
      return value + ' jour';
    }
    return null;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateparse'
})
export class DateparsePipe implements PipeTransform {

  transform(date: string): unknown {
    let d = Date.parse(date);
    return d;
  }

}

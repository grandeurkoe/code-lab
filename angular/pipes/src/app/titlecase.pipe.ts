import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return value;
    }
    if (typeof value != "string") {
      return value;
    } else {
      let newValue = value.substring(0,1).toUpperCase();
      value = newValue + value.substring(1, value.length);
      return value;
    }
  }

}
